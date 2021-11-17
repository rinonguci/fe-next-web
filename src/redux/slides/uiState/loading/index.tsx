import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";

export type IStatusLoading = "start" | "end" | "close";

export interface ILoadingSlice {
  status: IStatusLoading;
}
const initialState: ILoadingSlice = {
  status: "close",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<IStatusLoading>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusLoading } = loadingSlice.actions;
export const setStatusLoadingClose = () => async (dispatch: any) => {
  await setTimeout(() => {
    dispatch(setStatusLoading("close"));
  }, 500);
};

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
