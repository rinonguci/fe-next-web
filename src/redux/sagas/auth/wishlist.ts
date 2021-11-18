import { call, put } from "redux-saga/effects";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { openError, openSuccess } from "@redux/slides/common/notify";
import { getWishListSuccess } from "@redux/slides/auth";
import fetchWishlist from "@services/wishlist";
import {
  IAddWishListPayload,
  IGetWishListPayload,
  IWishlist,
} from "@interfaces/wishlist";

export function* getWishlistSaga() {
  try {
    const response: IAxiosResponse<IGetWishListPayload> = yield call(
      fetchWishlist.get
    );

    const { data } = response;

    const handleData: Array<IWishlist> = data.products.map(
      (value) => value.product
    );

    yield put(getWishListSuccess({ products: handleData }));
  } catch (error) {
    yield put(openError("Loading wishlist fail"));
  }
}

export function* addWishlistSaga(action: any) {
  const { payload } = action;
  try {
    const response: IAxiosResponse<IGetWishListPayload> = yield call(
      fetchWishlist.add,
      payload
    );

    yield put(openSuccess("con gà con"));

    const { data } = response;

    const handleData: Array<IWishlist> = data.products.map(
      (value) => value.product
    );

    yield put(getWishListSuccess({ products: handleData }));
  } catch (error) {
    yield put(openError("Loading wishlist fail"));
  }
}
