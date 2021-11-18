import { IFacet, IProduct, IProductDetail } from "@interfaces/product";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGetProductsByTypePayload {
  id: string;
  params?: string;
}
export interface IGetProductsByTypeSuccessPayload {
  data: Array<IProduct>;
}

export interface IGetAllProductsPayload {}
export interface IGetAllProductsSuccessPayload {
  data: Array<IProduct>;
}

export interface IGetProductDetailPayload {
  id: string;
}
export interface IGetProductDetailSuccessPayload {
  data: IProductDetail;
}

export interface IGetFacetsPayload {
  id: string;
}
export interface IGetFacetsSuccessPayload {
  data: Array<IFacet>;
}

interface IProductSlice {
  productsByType?: Array<IProduct>;
  allProducts?: Array<IProduct>;
  facets?: Array<IFacet>;
  productDetail?: IProductDetail;
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
    getProductsByTypeSuccess: (
      state,
      action: PayloadAction<IGetProductsByTypeSuccessPayload>
    ) => {
      state.productsByType = action.payload.data;
    },
    getAllProductsSuccess: (
      state,
      action: PayloadAction<IGetAllProductsSuccessPayload>
    ) => {
      state.allProducts = action.payload.data;
    },
    getProductDetailSuccess: (
      state,
      action: PayloadAction<IGetProductDetailSuccessPayload>
    ) => {
      state.productDetail = action.payload.data;
    },
    getFacetsSuccess: (
      state,
      action: PayloadAction<IGetFacetsSuccessPayload>
    ) => {
      state.facets = action.payload.data;
    },
  },
});

export const getProductsByType =
  createAction<IGetProductsByTypePayload>("getProducts");
export const getAllProducts =
  createAction<IGetAllProductsPayload>("getAllProducts");
export const getProductDetail =
  createAction<IGetProductDetailPayload>("getProductDetail");
export const getFacets = createAction<IGetFacetsPayload>("getFacets");

export const {
  getFacetsSuccess,
  getProductsByTypeSuccess,
  getAllProductsSuccess,
  getProductDetailSuccess,
} = productSlice.actions;

const productReducers = productSlice.reducer;
export default productReducers;
