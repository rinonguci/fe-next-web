import { IFacet } from "@interfaces/redux/product";
import { IProduct } from "@interfaces/redux/product";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductSlice {
  products?: Array<IProduct>;
  facets?: Array<IFacet>;
}

export interface IPayloadProducts {
  id: string;
}

export interface IPayloadFacets {
  id: string;
}

export interface IPayloadProductsSuccess {
  data: Array<IProduct>;
}

export interface IPayloadFacetsSuccess {
  data: Array<IFacet>;
}

const initialState: IProductSlice = {
  products: [],
  facets: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsSuccess: (
      state,
      action: PayloadAction<IPayloadProductsSuccess>
    ) => {
      state.products = action.payload.data;
    },
    getFacetsSuccess: (state, action: PayloadAction<IPayloadFacetsSuccess>) => {
      state.facets = action.payload.data;
    },
  },
});

export const getProducts = createAction<IPayloadProducts>("getProducts");
export const getFacets = createAction<IPayloadFacets>("getFacets");
export const { getFacetsSuccess, getProductsSuccess } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
