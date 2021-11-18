import { all } from "@redux-saga/core/effects";

import wishlistSaga from "./auth";
import categoriesSaga from "./categories";
import productsSaga from "./product";

export default function* rootSaga() {
  yield all([categoriesSaga(), productsSaga(), wishlistSaga()]);
}
