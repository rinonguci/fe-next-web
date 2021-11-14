import { IPayloadProducts, IPayloadFacets } from "@redux/slides/product";
import axiosRepository from "@utils/axios";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IFacet, IProduct } from "@interfaces/redux/product";

const axios = {
  urlProduct: (payload: IPayloadProducts) =>
    `categories/${payload.id}/products`,
  urlFacet: (payload: IPayloadFacets) =>
    `categories/${payload.id}/products/facets`,
};

const fetchProduct = {
  getProduct: async (payload: IPayloadProducts) => {
    try {
      const response = await axiosRepository.get<IAxiosResponse<IProduct>>(
        axios.urlProduct(payload)
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  },
  getFacts: async (payload: IPayloadFacets) => {
    try {
      const response = await axiosRepository.get<IAxiosResponse<IFacet>>(
        axios.urlFacet(payload)
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchProduct;
