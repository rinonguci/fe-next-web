import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILink {
  name: string;
  link: string;
}

export interface IBreadcrumbSlice {
  breadcrumb: Array<ILink>;
}

const initialState: IBreadcrumbSlice = {
  breadcrumb: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumb: (state, action: PayloadAction<IBreadcrumbSlice>) => {
      state.breadcrumb = action.payload.breadcrumb;
    },
  },
});
export const { setBreadcrumb } = breadcrumbSlice.actions;

const breadcrumbReducer = breadcrumbSlice.reducer;
export default breadcrumbReducer;
