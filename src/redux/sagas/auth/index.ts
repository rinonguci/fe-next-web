import { toast } from "react-toastify";
import { ILoginPayload, IUser } from "@interfaces/auth";
import fetchAuth from "@services/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { openError } from "@redux/slides/uiState/notify";

function* loginSaga(payload: any) {}

export default function* authSaga() {
  yield all([]);
}
