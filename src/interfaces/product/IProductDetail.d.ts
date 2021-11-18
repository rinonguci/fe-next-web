export interface IVariant {
  _id?: string;
  product?: string;
  price?: string;
  discountPrice?: number;
  size?: string;
}

export interface IProductDetail {
  _id?: string;
  name?: string;
  category?: string;
  categoryName?: string;
  brand?: string;
  imageCovers?: string[];
  images?: string[];
  longDescription?: string;
  shortDescription?: string;
  categoryPath?: string;
  isFeatured?: true;
  slug?: string;

  discountPrice?: number;
  price?: number;
  variants?: IVarriant[];
}
