import { createSlice } from "@reduxjs/toolkit";

export interface ICategorySlice {
  overflowMenu: boolean;
  overflowUser: boolean;
}

const initialState: ICategorySlice = {
  overflowMenu: false,
  overflowUser: false,
};

const bodySlice = createSlice({
  name: "body",
  initialState,
  reducers: {
    setOverflowMenu: (state, { payload }: { payload: boolean }) => {
      state.overflowMenu = payload;
    },
    setOverflowUser: (state, { payload }: { payload: boolean }) => {
      state.overflowUser = payload;
    },
  },
});
export const { setOverflowMenu, setOverflowUser } = bodySlice.actions;

const bodyReducer = bodySlice.reducer;
export default bodyReducer;
