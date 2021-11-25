import {
  IAddCartPayload,
  IAddWishlistPayload,
  IUser,
  IWishlist,
} from "@redux/types/user";
import { createSlice } from "@redux-ts-starter-kit/slice";

interface IUserSlice {
  user: IUser;
  wishlist: IWishlist;
  cart: any;
}

const initialState: IUserSlice = {
  user: {},
  wishlist: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  cases: {
    getUser() {},
    getUserSuccess(state, action) {
      state.user = action.payload;
    },

    getWishlist() {},
    getWishlistSuccess(state, action) {
      const handleData = action.products.map(
        (value: { product: any }) => value.product
      );
      state.wishlist = handleData;
    },
    addWishlist(state, action: IAddWishlistPayload) {},
    addWishlistSuccess(state, action) {
      const handleData = action.products.map(
        (value: { product: any }) => value.product
      );
      state.wishlist = handleData;
    },

    getCart() {},
    getCartSuccess(state, action) {
      console.log(action);

      // const handleData = action.products.map(
      //   (value: { product: any }) => value.product
      // );
      // state.wishlist = handleData;
    },
    addCart(state, action: IAddCartPayload) {},
    addCartSuccess(state, action) {
      // const handleData = action.products.map(
      //   (value: { product: any }) => value.product
      // );
      // state.wishlist = handleData;
    },
  },
});

export const {
  addWishlist,
  addWishlistSuccess,
  getUser,
  getUserSuccess,
  getWishlist,
  getWishlistSuccess,
  addCart,
  addCartSuccess,
  getCart,
  getCartSuccess,
} = userSlice.actions;

const userReducers = userSlice.reducer;
export default userReducers;
