import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IFacet, IProduct } from "@interfaces/redux/product";
import fetchProduct from "@services/products";
import { getFacets, getProducts } from "@redux/slides/product";
import * as types from "@redux/slides/product";
import { openError } from "@redux/slides/notify";

function* getProductsSaga(action: any) {
  try {
    const { payload } = action;
    const response: IAxiosResponse<Array<IProduct>> = yield call(
      fetchProduct.getProduct,
      payload
    );

    const { data } = response;

    yield put(types.getProductsSuccess({ data: data as Array<IProduct> }));
  } catch (error) {
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
    yield put(types.getFacetsSuccess({ data: data as Array<IFacet> }));
  } catch (error) {
    yield put(openError("Loading facets fail"));
  }
}

export default function* productsSaga() {
  yield all([
    takeLatest(getProducts.type, getProductsSaga),
    takeLatest(getFacets.type, getFacetsSaga),
  ]);
}
