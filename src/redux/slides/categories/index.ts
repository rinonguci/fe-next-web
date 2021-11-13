import { ICategory } from "@interfaces/redux";
import { createSlice } from "@reduxjs/toolkit";

export interface ICategorySlice {
  loading: boolean;
  errors: boolean;
  categories: Array<ICategory> | null;
}

const initialState: ICategorySlice = {
  loading: false,
  errors: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (
      state,
      { payload }: { payload: Array<ICategory> | null }
    ) => {
      state.categories = payload;
      state.loading = false;
      state.errors = false;
    },
    getCategoriesError: (state) => {
      state.loading = false;
      state.errors = true;
    },
  },
});
export const { getCategories, getCategoriesError, getCategoriesSuccess } =
  categoriesSlice.actions;

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
