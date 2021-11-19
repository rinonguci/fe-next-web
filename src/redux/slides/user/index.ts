import { IAddWishlistPayload, IUser, IWishlist } from "@redux/types/user";
import { createSlice } from "@redux-ts-starter-kit/slice";

interface IUserSlice {
  user: IUser;
  wishlist: IWishlist;
}

const initialState: IUserSlice = {
  user: {},
  wishlist: [],
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
  },
});

export const {
  addWishlist,
  addWishlistSuccess,
  getUser,
  getUserSuccess,
  getWishlist,
  getWishlistSuccess,
} = userSlice.actions;

const userReducers = userSlice.reducer;
export default userReducers;
