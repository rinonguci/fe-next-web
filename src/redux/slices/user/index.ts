import {
  IAddCartPayload,
  IAddWishlistPayload,
  IBillList,
  ICartList,
  IDeleteCartPayload,
  IUpdateCartPayload,
  IUser,
  IWishlist,
} from "@redux/types/user";
import { createSlice } from "@redux-ts-starter-kit/slice";

interface IUserSlice {
  user: IUser;
  wishlist: IWishlist;
  cart: ICartList;
  bill: IBillList;
}

const initialState: IUserSlice = {
  user: {},
  wishlist: [],
  cart: [],
  bill: [],
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
      let data = handleData(action);
      if (!data) {
        return;
      }

      state.cart = data;
    },
    addCart(state, action: IAddCartPayload) {},
    addCartSuccess(state, action) {
      let data = handleData(action);
      if (!data) {
        return;
      }

      state.cart = data;
    },

    updateCart(state, action: IUpdateCartPayload) {},
    updateCartSuccess(state, action) {
      let data = handleData(action);
      if (!data) {
        return;
      }

      state.cart = data;
    },
    deleteCart(state, action: IDeleteCartPayload) {},
    deleteCartSuccess(state, action) {
      let data = handleData(action);
      if (!data) {
        return;
      }

      state.cart = data;
    },
    addBill(state, action: any) {},
    addBillSuccess(state, action) {
      state.cart = [];
    },
    getBill() {},
    getBillSuccess(state, action) {
      state.bill = action.payload;
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
  updateCart,
  updateCartSuccess,
  deleteCart,
  deleteCartSuccess,
  addBill,
  addBillSuccess,
  getBill,
  getBillSuccess,
} = userSlice.actions;

const userReducers = userSlice.reducer;
export default userReducers;

const handleData = (action: any) => {
  if (action.items.length < 0) {
    return;
  }
  const handleData = action.items.map((value: any) => ({
    ...value.data,
    _id: value.data.variants._id,
    id: value.data._id,
    idProduct: value.data._id,
    idVariant: value.data.variants.sizeId,
    price: value.data.variants.price,
    quantity: value.quantity,
  }));

  return handleData;
};
