import { all, call, put, takeLatest } from "redux-saga/effects";
import fetchCategories from "@services/categories";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { ICategory } from "@interfaces/redux";
import { openError } from "@redux/slides/uiState/notify";
import {
  getCategories,
  getCategoriesSuccess,
} from "@redux/slides/data/categories";

function* getCategoriesSaga() {
  try {
    const response: IAxiosResponse<Array<ICategory>> = yield call(
      fetchCategories.getCategories
    );

    const { data = [] } = response;

    yield put(getCategoriesSuccess(data as Array<ICategory>));
  } catch (error) {
    getCategoriesSaga();
    yield put(openError("Loading category fail"));
  }
}

export default function* categoriesSaga() {
  yield all([takeLatest(getCategories.type, getCategoriesSaga)]);
}
