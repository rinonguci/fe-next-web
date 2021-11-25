import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { addWishlistSuccess, getWishlistSuccess } from "@redux/slices/user";
import fetchWishlist from "@services/wishlist";
import { IDataResponse } from "@interfaces/common/IAxiosResponse";

export function* getWishlistSaga() {
  const response: IDataResponse = yield call(fetchWishlist.get);

  const { data } = response;

  yield put(getWishlistSuccess(data));
}

export function* addWishlistSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchWishlist.add, payload);

  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(addWishlistSuccess(data));
}
