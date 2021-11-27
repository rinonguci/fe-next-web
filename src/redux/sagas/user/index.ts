import { all, takeLatest } from "redux-saga/effects";
import { addCart, addWishlist, getCart, getWishlist } from "@redux/slices/user";
import { addWishlistSaga, getWishlistSaga } from "./wishlist";
import { addCartSaga, getCartSaga } from "./cart";

export default function* userSaga() {
  yield all([
    takeLatest(getWishlist.type, getWishlistSaga),
    takeLatest(addWishlist.type, addWishlistSaga),
    takeLatest(getCart.type, getCartSaga),
    takeLatest(addCart.type, addCartSaga),
  ]);
}
