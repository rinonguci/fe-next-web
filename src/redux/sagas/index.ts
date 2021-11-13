import { all } from "@redux-saga/core/effects";
import categoriesSaga from "./categories";

export default function* rootSaga() {
  yield all([categoriesSaga()]);
}
