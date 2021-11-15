import { IProduct } from "@interfaces/redux/product";

export const getPathProductAll = (data: Array<IProduct>) => {
  let result = data.map((path) => ({
    params: {
      productDetail: path.slug,
    },
  }));

  return result;
};
