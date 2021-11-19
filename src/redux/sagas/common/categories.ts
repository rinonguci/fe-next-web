import { call, put } from "redux-saga/effects";
import { IDataResponse } from "@interfaces/common/IAxiosResponse";
import fetchCommon from "@services/common";
import { getCategoriesSuccess } from "@redux/slides/common";

export function* getCategoriesSaga() {
  const response: IDataResponse = yield call(fetchCommon.getCategories);

  const { data } = response;

  yield put(getCategoriesSuccess(data));
}
