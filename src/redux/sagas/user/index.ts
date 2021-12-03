import { all, takeLatest } from "redux-saga/effects";
import {
  addBill,
  addCart,
  addWishlist,
  getBill,
  getCart,
  getWishlist,
  updateCart,
} from "@redux/slices/user";
import { addWishlistSaga, getWishlistSaga } from "./wishlist";
import {
  addBillSaga,
  addCartSaga,
  getBillSaga,
  getCartSaga,
  updateCartSaga,
} from "./cart";

export default function* userSaga() {
  yield all([
    takeLatest(getWishlist.type, getWishlistSaga),
    takeLatest(addWishlist.type, addWishlistSaga),
    takeLatest(getCart.type, getCartSaga),
    takeLatest(addCart.type, addCartSaga),
    takeLatest(updateCart.type, updateCartSaga),
    takeLatest(addBill.type, addBillSaga),
    takeLatest(getBill.type, getBillSaga),
  ]);
}
