import { getCategories } from "@redux/slides/common";
import { all, takeLatest } from "redux-saga/effects";
import { getCategoriesSaga } from "./categories";

export default function* commonSaga() {
  yield all([takeLatest(getCategories.type, getCategoriesSaga)]);
}
