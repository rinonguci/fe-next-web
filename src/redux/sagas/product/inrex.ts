import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IFacet, IProduct, IProductDetail } from "@interfaces/redux/product";
import fetchProduct from "@services/products";
import {
  getAllProducts,
  getAllProductsSuccess,
  getFacets,
  getFacetsSuccess,
  getProductDetailSuccess,
  getProductsByType,
  getProductsByTypeSuccess,
  getProductDetail,
} from "@redux/slides/product";

import { openError } from "@redux/slides/common/notify";
import {
  setStatusLoading,
  setStatusLoadingClose,
} from "@redux/slides/common/loading";
import { useAppDispatch } from "@hooks/redux";

function* getProductsByTypeSaga(action: any) {
  try {
    const { payload } = action;
    yield put(setStatusLoading({ status: "start" }));
    const response: IAxiosResponse<Array<IProduct>> = yield call(
      fetchProduct.getProductByType,
      payload
    );
    yield put(setStatusLoading({ status: "end" }));

    const { data } = response;

    yield put(getProductsByTypeSuccess({ data: data as Array<IProduct> }));
  } catch (error) {
    yield put(openError("Loading products fail"));
  }
}

function* getAllProductsSaga(action: any) {
  try {
    const { payload } = action;
    const response: IAxiosResponse<Array<IProduct>> = yield call(
      fetchProduct.getAllProduct,
      payload
    );

    const { data } = response;

    yield put(getAllProductsSuccess({ data: data as Array<IProduct> }));
  } catch (error) {
    yield put(openError("Loading products fail"));
  }
}

function* getProductDetailSaga(action: any) {
  try {
    const { payload } = action;
    const response: IAxiosResponse<IProductDetail> = yield call(
      fetchProduct.getProductDetail,
      payload
    );

    const { data } = response;

    yield put(getProductDetailSuccess({ data: data as IProductDetail }));
  } catch (error) {
    yield put(openError("Loading Product detail fail"));
  }
}

function* getFacetsSaga(action: any) {
  try {
    const { payload } = action;
    const response: IAxiosResponse<Array<IFacet>> = yield call(
      fetchProduct.getFacts,
      payload
    );

    const { data } = response;

    yield put(getFacetsSuccess({ data: data as Array<IFacet> }));
  } catch (error) {
    yield put(openError("Loading facets fail"));
  }
}

export default function* productsSaga() {
  yield all([
    takeLatest(getProductsByType.type, getProductsByTypeSaga),
    takeLatest(getAllProducts.type, getAllProductsSaga),
    takeLatest(getProductDetail.type, getProductDetailSaga),
    takeLatest(getFacets.type, getFacetsSaga),
  ]);
}
