import { IDataResponse } from "@interfaces/common/IAxiosResponse";
import { uploadImageSuccess } from "@redux/slices/user";
import fetchAuth from "@services/auth";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

export function* uploadImageSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchAuth.uploadImage, payload);

  const { data, status } = response;

  if (!data) {
    toast.error(response);
    return;
  }

  toast.success(status);
  yield put(uploadImageSuccess({ payload: data.photo }));
}
