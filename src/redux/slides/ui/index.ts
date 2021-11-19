import { createSlice } from "@reduxjs/toolkit";
import {
  IBooleanPayload,
  IBreadcrumb,
  IBreadcrumbPayload,
  ILoading,
  ILoadingPayload,
} from "@redux/types/ui";

export interface ICommonSlice {
  overflowMenu: boolean;
  overflowUser: boolean;
  breadcrumb: IBreadcrumb;
  loading: ILoading;
}

const initialState: ICommonSlice = {
  overflowMenu: false,
  overflowUser: false,
  breadcrumb: [],
  loading: {
    status: "close",
    to: "saga",
    time: 6,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setOverflowMenu(state, action: { payload: IBooleanPayload }) {
      state.overflowMenu = action.payload;
    },
    setOverflowUser(state, action: { payload: IBooleanPayload }) {
      state.overflowUser = action.payload;
    },
    setBreadcrumb(state, action: { payload: IBreadcrumbPayload }) {
      state.breadcrumb = action.payload;
    },
    setStatusLoading(state, action: { payload: ILoadingPayload }) {
      const {
        payload: { status, to = "saga", time = 6 },
      } = action;

      state.loading = { status, to, time };
    },
  },
});

export const {
  setBreadcrumb,
  setOverflowMenu,
  setOverflowUser,
  setStatusLoading,
} = uiSlice.actions;

const uiReducers = uiSlice.reducer;
export default uiReducers;
