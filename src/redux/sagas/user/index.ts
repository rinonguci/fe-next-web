import { all, takeLatest } from "redux-saga/effects";
import { addWishlist, getWishlist } from "@redux/slides/user";
import { addWishlistSaga, getWishlistSaga } from "./wishlist";

export default function* userSaga() {
  yield all([
    takeLatest(getWishlist.type, getWishlistSaga),
    takeLatest(addWishlist.type, addWishlistSaga),
  ]);
}
