import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type IPayload = string;

export interface INotifySlice {}
const initialState: INotifySlice = {};

const notifySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    openSuccess: (state, action: PayloadAction<IPayload>) => {
      toast.success(`🦄 ${action.payload}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    openError: (state, action: PayloadAction<IPayload>) => {
      console.log(action);

      toast.error(`🦄 ${action.payload}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
});
export const { openError, openSuccess } = notifySlice.actions;

const notifyReducer = notifySlice.reducer;
export default notifyReducer;
