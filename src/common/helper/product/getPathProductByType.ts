import { ICategory } from "@interfaces/redux";

const mapChildren: any = (catagories: Array<ICategory>) => {
  return catagories?.reduce(function (r: any, a: any) {
    r.push({ id: a?._id, name: a?.name });
    if (a?.children && Array.isArray(a.children)) {
      r = r.concat(mapChildren(a.children));
    }
    return r;
  }, []);
};

export const getPathProductByType = (data: Array<ICategory>) => {
  let result = mapChildren(data).map((path: { id: string; name: string }) => ({
    params: {
      product: [path.id, path.name],
    },
  }));
  return result;
};
