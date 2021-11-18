import { ICategory } from "@interfaces/redux";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategorySlice {
  categories?: Array<ICategory>;
}

const initialState: ICategorySlice = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesSuccess: (state, action: PayloadAction<Array<ICategory>>) => {
      state.categories = action.payload;
    },
  },
});
export const { getCategoriesSuccess } = categoriesSlice.actions;
export const getCategories = createAction("getCategories");

const categoriesReducers = categoriesSlice.reducer;
export default categoriesReducers;
