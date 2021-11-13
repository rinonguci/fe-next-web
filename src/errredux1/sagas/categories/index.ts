import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import * as types from "redux1/slides/categories";
import { callAPI } from "@utils/API";
import { getCategories } from "@services/categories";

function* getCategoriesSaga() {
  try {
    const response: Promise<AxiosResponse> = yield call<any>(getCategories);

    yield put(types.getCategoriesSuccess(response));
  } catch (error) {
    yield put(types.getCategoriesError());
  }
}

export default function* categoriesSaga() {
  yield takeEvery(types.getCategories().type, getCategoriesSaga);
}
