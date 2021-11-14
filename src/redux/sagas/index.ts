import { all } from "@redux-saga/core/effects";
import categoriesSaga from "./categories";
import productsSaga from "./product/inrex";

export default function* rootSaga() {
  yield all([categoriesSaga(), productsSaga()]);
}
