import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INotifySlice {
  success: boolean;
  error: boolean;
  message?: string;
}

type IPayload = string;

const initialState: INotifySlice = {
  success: false,
  error: false,
  message: "",
};

const notifySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    openSuccess: (state, action: PayloadAction<IPayload>) => {
      state.success = true;
      state.message = action.payload;
    },
    closeSuccess: (state) => {
      state.success = false;
    },
    openError: (state, action: PayloadAction<IPayload>) => {
      state.error = true;
      state.message = action.payload;
    },
    closeError: (state) => {
      state.error = false;
    },
  },
});
export const { closeError, closeSuccess, openError, openSuccess } =
  notifySlice.actions;

const notifyReducer = notifySlice.reducer;
export default notifyReducer;
