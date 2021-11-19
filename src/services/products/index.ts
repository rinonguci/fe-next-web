import AxiosService from "@common/utils/axios";

const url = {
  urlGetProductByType: ({ params, id }: any) =>
    `categories/${id}/products/${params !== undefined ? "?" + params : ""}`,
  urlGetAllProduct: () => `products`,
  urlGetProductDetail: ({ id }: any) => `products/${id}`,
  urlGetFacet: (payload: any) => `categories/${payload.id}/products/facets`,
};

const fetchProduct = {
  async getProductByType(payload: any) {
    const response = await AxiosService.get(url.urlGetProductByType(payload));
    return response;
  },
  async getAllProduct(payload: any) {
    const response = await AxiosService.get(url.urlGetAllProduct());
    return response;
  },
  async getProductDetail(payload: any) {
    const response = await AxiosService.get(url.urlGetProductDetail(payload));
    return response;
  },
  async getFacts(payload: any) {
    const response = await AxiosService.get(url.urlGetFacet(payload));
    return response;
  },
};

export default fetchProduct;
