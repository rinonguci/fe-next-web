export interface IProduct {
  _id: sttring;
  name: sttring;
  category: sttring;
  categoryName: sttring;
  brand: sttring;
  imageCovers: string[];
  images: string[];
  categoryPath: string;
  isFeatured: boolean;
  slug: string;
  discountPrice: number;
  price: number;
}
