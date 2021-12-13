import { createSlice } from "@reduxjs/toolkit";
import {
  IAllProducts,
  IFacets,
  IGetFacetsPayload,
  IGetProductDetailPayload,
  IGetProductsByTypePayload,
  IProductDetail,
  IProductsByType,
  ISearchProductPayload,
} from "@redux/types/product";

interface IProductSlice {
  productsByType: IProductsByType;
  searchProduct: IProductsByType;
  allProducts: IAllProducts;
  facets: IFacets;
  productDetail: IProductDetail;
  productFeatures: IAllProducts;
}

const initialState: IProductSlice = {
  productsByType: {
    loading: false,
    data: [],
  },
  searchProduct: {
    loading: false,
    data: [],
  },
  allProducts: [],
  facets: [],
  productDetail: {},
  productFeatures: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsByType(state, action: { payload: IGetProductsByTypePayload }) {
      state.productsByType = { ...state.productsByType, loading: false };
    },
    getProductsByTypeSuccess(state, action) {
      state.productsByType = { data: action.payload, loading: true };
    },

    searchProduct(state, action: { payload: ISearchProductPayload }) {
      state.searchProduct = { ...state.searchProduct, loading: false };
    },
    searchProductSuccess(state, action) {
      state.searchProduct = { data: action.payload, loading: true };
    },

    getAllProducts: () => {},
    getAllProductsSuccess: (state, action) => {
      state.allProducts = action.payload;
    },

    getProductFeatures: () => {},
    getProductFeaturesSuccess: (state, action) => {
      state.productFeatures = action.payload;
    },

    getProductDetail: (
      state,
      action: { payload: IGetProductDetailPayload }
    ) => {},
    getProductDetailSuccess: (state, action) => {
      state.productDetail = action.payload;
    },

    getFacets: (state, action: { payload: IGetFacetsPayload }) => {},
    getFacetsSuccess: (state, action) => {
      state.facets = action.payload;
    },
  },
});

export const {
  getAllProducts,
  getAllProductsSuccess,
  getProductFeatures,
  getProductFeaturesSuccess,
  searchProduct,
  searchProductSuccess,
  getFacets,
  getFacetsSuccess,
  getProductDetail,
  getProductDetailSuccess,
  getProductsByType,
  getProductsByTypeSuccess,
} = productSlice.actions;

const productReducers = productSlice.reducer;
export default productReducers;
