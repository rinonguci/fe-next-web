import { ILoginPayload, IAddUserSuccessPayload, IUser } from "@interfaces/auth";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  user: IUser;
}

const initialState: IUserSlice = {
  user: {},
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserSuccess: (state, action: PayloadAction<IAddUserSuccessPayload>) => {
      state.user = action.payload.user;
    },
  },
});
export const { addUserSuccess } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
