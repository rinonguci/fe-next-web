import { call, put } from "redux-saga/effects";
import {
  getAllProductsSuccess,
  getProductDetailSuccess,
  getProductFeaturesSuccess,
  getProductsByTypeSuccess,
  searchProductSuccess,
} from "@redux/slices/product";
import fetchProduct from "@services/products";
import { IDataResponse } from "@interfaces/common/IAxiosResponse";
import { setStatusLoading } from "@redux/slices/ui";

export function* getProductsByTypeSaga(action: any) {
  const { payload } = action;

  yield put(setStatusLoading({ status: "start" }));
  const response: IDataResponse = yield call(
    fetchProduct.getProductByType,
    payload
  );

  yield put(setStatusLoading({ status: "end" }));

  if (response && response?.data) {
    const { data } = response;

    yield put(getProductsByTypeSuccess(data));
  }
}

export function* getAllProductsSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(fetchProduct.getAllProduct, {});

  if (response && response?.data) {
    const { data } = response;

    yield put(getAllProductsSuccess(data));
  }
}

export function* getProductFeaturesSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(
    fetchProduct.getProductFeatures,
    {}
  );

  if (response && response?.data) {
    const { data } = response;

    yield put(getProductFeaturesSuccess(data));
  }
}

export function* getProductDetailSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(
    fetchProduct.getProductDetail,
    payload
  );

  if (response && response?.data) {
    const { data } = response;

    yield put(getProductDetailSuccess(data));
  }
}

export function* searchProductSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(
    fetchProduct.searchProduct,
    payload
  );

  const { data } = response;

  yield put(searchProductSuccess(data));
}
