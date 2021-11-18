import {
  IGetProductsByTypePayload,
  IGetFacetsPayload,
  IGetAllProductsPayload,
  IGetProductDetailPayload,
} from "@redux/slides/data/product";
import AxiosService from "@common/utils/axios";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IFacet, IProduct, IProductDetail } from "@interfaces/redux/product";

const axios = {
  urlGetProductByType: ({ params, id }: IGetProductsByTypePayload) =>
    `categories/${id}/products/${params !== undefined ? "?" + params : ""}`,
  urlGetAllProduct: ({}: IGetAllProductsPayload) => `products`,
  urlGetProductDetail: ({ id }: IGetProductDetailPayload) => `products/${id}`,
  urlGetFacet: (payload: IGetFacetsPayload) =>
    `categories/${payload.id}/products/facets`,
};

const fetchProduct = {
  getProductByType: async (payload: IGetProductsByTypePayload) => {
    try {
      const response = await AxiosService.get<IAxiosResponse<Array<IProduct>>>(
        axios.urlGetProductByType(payload)
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllProduct: async (payload: IGetAllProductsPayload) => {
    try {
      const response = await AxiosService.get<IAxiosResponse<Array<IProduct>>>(
        axios.urlGetAllProduct(payload)
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProductDetail: async (payload: IGetProductDetailPayload) => {
    try {
      const response = await AxiosService.get<IAxiosResponse<IProductDetail>>(
        axios.urlGetProductDetail(payload)
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getFacts: async (payload: IGetFacetsPayload) => {
    try {
      const response = await AxiosService.get<IAxiosResponse<IFacet>>(
        axios.urlGetFacet(payload)
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchProduct;
