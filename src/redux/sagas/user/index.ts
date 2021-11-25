import { all, takeLatest } from "redux-saga/effects";
import { addCart, addWishlist, getWishlist } from "@redux/slices/user";
import { addWishlistSaga, getWishlistSaga } from "./wishlist";
import { addCartSaga } from "./cart";

export default function* userSaga() {
  yield all([
    takeLatest(getWishlist.type, getWishlistSaga),
    takeLatest(addWishlist.type, addWishlistSaga),
    takeLatest(addCart.type, addCartSaga),
  ]);
}
