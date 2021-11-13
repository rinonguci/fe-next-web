import { ICategory } from "@interfaces/redux";
import { createSlice } from "@reduxjs/toolkit";

export interface ICategorySlice {
  overflow: boolean;
}

const initialState: ICategorySlice = {
  overflow: false,
};

const bodySlice = createSlice({
  name: "body",
  initialState,
  reducers: {
    setOverflow: (state, { payload }: { payload: boolean }) => {
      state.overflow = payload;
    },
  },
});
export const { setOverflow } = bodySlice.actions;

const bodyReducer = bodySlice.reducer;
export default bodyReducer;
