interface IFacetOfProduct {
  name: string;
  type: string;
  _id: string;
}

export interface IProduct {
  brand: string;
  category: string;
  categoryName: string;
  categoryPath: string;
  discountPrice: number;
  facets: Array<IFacetOfProduct>;
  filters: Array<string>;
  imageCovers: Array<string>;
  images: Array<string>;
  isFeatured: boolean;
  longDescription: string;
  name: string;
  price: number;
  shortDescription: string;
  slug: string;
  _id: string;
}
