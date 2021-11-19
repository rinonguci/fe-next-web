import { all } from "@redux-saga/core/effects";
import userReducers from "./user";
import commonSaga from "./common";
import productsSaga from "./product";

export default function* rootSaga() {
  yield all([commonSaga(), productsSaga(), userReducers()]);
}
