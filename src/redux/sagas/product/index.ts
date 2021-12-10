import { all, takeLatest } from "redux-saga/effects";
import {
  getAllProducts,
  getFacets,
  getProductsByType,
  getProductDetail,
  searchProduct,
  getProductFeatures,
} from "@redux/slices/product";
import {
  getAllProductsSaga,
  getProductDetailSaga,
  getProductFeaturesSaga,
  getProductsByTypeSaga,
  searchProductSaga,
} from "./product";
import { getFacetsSaga } from "./facet";

export default function* productSaga() {
  yield all([
    takeLatest(getProductsByType.type, getProductsByTypeSaga),
    takeLatest(searchProduct.type, searchProductSaga),
    takeLatest(getAllProducts.type, getAllProductsSaga),
    takeLatest(getProductDetail.type, getProductDetailSaga),
    takeLatest(getFacets.type, getFacetsSaga),
    takeLatest(getProductFeatures.type, getProductFeaturesSaga),
  ]);
}
