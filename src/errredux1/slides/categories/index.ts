import { ICategory } from "@interfaces/redux";
import { createSlice } from "@reduxjs/toolkit";

export interface ICategorySlice {
  loading: boolean;
  errors: boolean;
  list: ICategory | [];
}

const initialState: ICategorySlice = {
  loading: false,
  errors: false,
  list: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.list = payload;
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

export default categoriesSlice.reducer;
