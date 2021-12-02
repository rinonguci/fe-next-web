import { createSlice } from "@reduxjs/toolkit";
import {
  IAllProducts,
  IFacets,
  IGetFacetsPayload,
  IGetProductDetailPayload,
  IGetProductsByTypePayload,
  IProductDetail,
  IProductsByType,
} from "@redux/types/product";

interface IProductSlice {
  productsByType: IProductsByType;
  allProducts: IAllProducts;
  facets: IFacets;
  productDetail: IProductDetail;
}

const initialState: IProductSlice = {
  productsByType: [],
  allProducts: [],
  facets: [],
  productDetail: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsByType(state, action: { payload: IGetProductsByTypePayload }) {},
    getProductsByTypeSuccess(state, action) {
      state.productsByType = action.payload;
    },

    getAllProducts: () => {},
    getAllProductsSuccess: (state, action) => {
      state.allProducts = action.payload;
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
  getFacets,
  getFacetsSuccess,
  getProductDetail,
  getProductDetailSuccess,
  getProductsByType,
  getProductsByTypeSuccess,
} = productSlice.actions;

const productReducers = productSlice.reducer;
export default productReducers;
