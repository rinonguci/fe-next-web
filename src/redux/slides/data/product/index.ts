import { IFacet } from "@interfaces/redux/product";
import { IProduct } from "@interfaces/redux/product";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductSlice {
  productsByType?: Array<IProduct>;
  allProducts?: Array<IProduct>;
  facets?: Array<IFacet>;
}

export interface IGetProductsByTypePayload {
  id: string;
  params?: string;
}

export interface IGetProductsByTypeSuccessPayload {
  data: Array<IProduct>;
}

export interface IGetFacetsPayload {
  id: string;
}

export interface IGetFacetsSuccessPayload {
  data: Array<IFacet>;
}

export interface IGetAllProductsPayload {}

export interface IGetAllProductsSuccessPayload {
  data: Array<IProduct>;
}

const initialState: IProductSlice = {
  productsByType: [],
  allProducts: [],
  facets: [],
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
export const getFacets = createAction<IGetFacetsPayload>("getFacets");
export const {
  getFacetsSuccess,
  getProductsByTypeSuccess,
  getAllProductsSuccess,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
