import { all, takeLatest } from "redux-saga/effects";
import { addWishlist, getWishlist } from "@redux/slides/auth";
import { addWishlistSaga, getWishlistSaga } from "./wishlist";

export default function* wishlistSaga() {
  yield all([
    takeLatest(getWishlist.type, getWishlistSaga),
    takeLatest(addWishlist.type, addWishlistSaga),
  ]);
}
