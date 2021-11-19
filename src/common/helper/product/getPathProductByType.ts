import { ICategory } from "@redux/types/common";

const mapChildren: any = (catagories: Array<ICategory>) => {
  return catagories?.reduce(function (r: any, a: any) {
    r.push({ id: a?._id, slug: a?.slug });
    if (a?.children && Array.isArray(a.children)) {
      r = r.concat(mapChildren(a.children));
    }
    return r;
  }, []);
};

export const getPathProductByType = (data: Array<ICategory>) => {
  let result = mapChildren(data).map((path: { id: string; slug: string }) => ({
    params: {
      slug: [path.id, path.slug],
    },
  }));
  return result;
};
