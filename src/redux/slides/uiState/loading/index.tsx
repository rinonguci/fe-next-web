import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";

export type IStatusLoading = "start" | "end" | "close";

interface ILoadingSlice {
  status: IStatusLoading;
  to?: "link" | "saga";
  time: number;
}

interface ILoadingSlicePayload {
  status: IStatusLoading;
  to?: "link" | "saga";
  time?: number;
}

const initialState: ILoadingSlice = {
  status: "close",
  to: "saga",
  time: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setStatusLoading: (
      state,
      {
        payload: { status, to = "saga", time = 6 },
      }: PayloadAction<ILoadingSlicePayload>
    ) => {
      state.status = status;
      state.to = to;
      state.time = time;
    },
  },
});

export const { setStatusLoading } = loadingSlice.actions;
export const setStatusLoadingClose = () => async (dispatch: any) => {
  await setTimeout(() => {
    dispatch(setStatusLoading({ status: "close" }));
  }, 500);
};

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
