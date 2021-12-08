import { IProduct } from "@redux/types/product";

export const getPathProductAll = (data: Array<IProduct>) => {
  let result = data.map((path) => ({
    params: {
      slug: [path.id, path.slug],
    },
  }));

  return result;
};
