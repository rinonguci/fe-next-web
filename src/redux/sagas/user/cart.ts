import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  addBillSuccess,
  addCartSuccess,
  deleteCartSuccess,
  getBillSuccess,
  getCartSuccess,
  updateCartSuccess,
} from "@redux/slices/user";

import { IDataResponse } from "@interfaces/common/IAxiosResponse";
import fetchCart from "@services/cart";

export function* getCartSaga() {
  const response: IDataResponse = yield call(fetchCart.get);

  const { data } = response;

  yield put(getCartSuccess(data));
}

export function* addCartSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchCart.add, payload);
  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(addCartSuccess(data));
}

export function* updateCartSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchCart.updateQuantity, payload);
  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(updateCartSuccess(data));
}

export function* deleteCartSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchCart.deleteCart, payload);
  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(deleteCartSuccess(data));
}

export function* addBillSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchCart.addBill, payload);

  const { data, status } = response;

  if (status !== "Success") {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(addBillSuccess(data));
}

export function* getBillSaga() {
  // const { payload } = action;

  const response: IDataResponse = yield call(fetchCart.getBill);

  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(getBillSuccess({ payload: data }));
}
