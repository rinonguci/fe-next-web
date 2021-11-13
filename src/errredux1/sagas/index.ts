import { all } from "redux-saga/effects";
import categoriesSaga from "./categories";

export default function* rootSaga() {
  yield all([categoriesSaga()]);
}
