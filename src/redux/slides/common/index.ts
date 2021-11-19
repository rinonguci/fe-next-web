import { createSlice } from "@reduxjs/toolkit";
import { ICategoies } from "@redux/types/common";

export interface ICommonSlice {
  categories: ICategoies;
}

const initialState: ICommonSlice = {
  categories: [],
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    getCategories() {},
    getCategoriesSuccess(state, action) {
      state.categories = action.payload;
    },
  },
});
export const { getCategories, getCategoriesSuccess } = commonSlice.actions;

const commonReducers = commonSlice.reducer;
export default commonReducers;
