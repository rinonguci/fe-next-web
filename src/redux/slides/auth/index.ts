import { ILoginPayload, IGetUserSuccessPayload, IUser } from "@interfaces/auth";
import {
  IAddWishListPayload,
  IGetWishListPayload,
  IWishlist,
} from "@interfaces/wishlist";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  user: IUser;
  wishList: Array<IWishlist>;
}

const initialState: IUserSlice = {
  user: {},
  wishList: [],
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser() {},
    getUserSuccess(state, action: PayloadAction<IGetUserSuccessPayload>) {
      state.user = action.payload.user;
    },
    getWishListSuccess(state, action: PayloadAction<IGetWishListPayload>) {
      console.log(action.payload.products);

      state.wishList = action.payload.products;
    },
  },
});
export const { getUserSuccess, getWishListSuccess } = authSlice.actions;
export const getWishlist = createAction("getWishlist");
export const addWishlist = createAction<IAddWishListPayload>("addWishlist");

const authReducers = authSlice.reducer;
export default authReducers;
