import { IProductDetail } from "@interfaces/product";

export interface IWishlist {
  _id?: string;
  name?: string;
  category?: string;
  categoryName?: string;
  brand?: string[];
  slug?: string;
  discountPrice?: number;
  price?: number;
  id?: string;
}

export interface IGetWishListPayload {
  products: Array<{ _id: string; product: IWishlist }>;
}

export interface IGetWishListSuccessPayload {
  products: Array<IWishlist>;
}

export interface IAddWishListPayload {
  product: string; // Id Product
}
