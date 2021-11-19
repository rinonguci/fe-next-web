import { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
}

export interface IWish {
  _id?: string;
  name?: string;
  category?: string;
  categoryName?: string;
  brand: string;
  imageCovers?: string[];
  slug?: string;
  discountPrice?: number;
  price?: number;
  id?: string;
}
export type IWishlist = Array<IWish>;

export type IAddWishlistPayload = { product: string };
