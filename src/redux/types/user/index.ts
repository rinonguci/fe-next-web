import { PayloadAction } from "@reduxjs/toolkit";
import { IVariant } from "../product";

export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
  photo?: string;
}

export interface IWish {
  name?: string;
  category?: string;
  categoryName?: string;
  brand: string;
  imageCovers?: string[];
  slug?: string;
  discountPrice?: number;
  price?: number;
  id?: string;
  variants: Array<IVariant>;
}
export type IWishlist = Array<IWish>;

export type IAddWishlistPayload = { product: string };

export type IAddCartPayload = { quantity: number; productVariation: string };

export type IUpdateCartPayload = { quantity: number; productVariation: string };

export type IDeleteCartPayload = { id: string };

export interface ICart {
  id: string;
  idProduct: string;
  price: number;
  quantity: number;
  name: string;
  imageCovers: string[];
  images: string[];
  variants: IVariant;
  slug: string;
}

export type ICartList = Array<ICart>;

export interface IBill {
  amount: number;
  createAt: Date;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
    sku: string;
    total: number;
    _id: string;
  }>;
  quantity: number;
  _id: string;
}

export type IBillList = Array<IBill>;
