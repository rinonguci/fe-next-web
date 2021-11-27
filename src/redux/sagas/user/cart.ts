import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { addCartSuccess, getCartSuccess } from "@redux/slices/user";

import { IDataResponse } from "@interfaces/common/IAxiosResponse";
import fetchCart from "@services/cart";

export function* getCartSaga() {
  const response: IDataResponse = yield call(fetchCart.get);

  const { data } = response;
  debugger;
  console.log(data);

  yield put(getCartSuccess(data));
}

export function* addCartSaga(action: any) {
  const { payload } = action;

  console.log("addcard: ", payload);
  const response: IDataResponse = yield call(fetchCart.add, payload);

  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(addCartSuccess(data));
}
