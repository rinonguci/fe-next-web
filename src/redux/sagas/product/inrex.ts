import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IFacet, IProduct } from "@interfaces/redux/product";
import fetchProduct from "@services/products";
import {
  getAllProducts,
  getAllProductsSuccess,
  getFacets,
  getFacetsSuccess,
  getProductsByType,
  getProductsByTypeSuccess,
} from "@redux/slides/data/product";

import { openError } from "@redux/slides/uiState/notify";

function* getProductsByTypeSaga(action: any) {
  try {
    const { payload } = action;
    const response: IAxiosResponse<Array<IProduct>> = yield call(
      fetchProduct.getProductByType,
      payload
    );
    console.log(payload);

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
    console.log(payload);

    const { data } = response;

    yield put(getAllProductsSuccess({ data: data as Array<IProduct> }));
  } catch (error) {
    getAllProductsSaga(action);
    yield put(openError("Loading products fail"));
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
    getFacetsSaga(action);
    yield put(openError("Loading facets fail"));
  }
}

export default function* productsSaga() {
  yield all([
    takeLatest(getProductsByType.type, getProductsByTypeSaga),
    takeLatest(getAllProducts.type, getAllProductsSaga),
    takeLatest(getFacets.type, getFacetsSaga),
  ]);
}
