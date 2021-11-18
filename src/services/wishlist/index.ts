import AxiosService from "@common/utils/axios";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import { IAddWishListPayload } from "@interfaces/wishlist";

const axios = {
  urlGet: "wishlist",
  urlAdd: "wishlist/add",
};

const fetchWishlist = {
  get: async (): Promise<any> => {
    try {
      const response = await AxiosService.get<any, IAxiosResponse<any>>(
        axios.urlGet
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  add: async (payload: IAddWishListPayload): Promise<any> => {
    try {
      console.log(payload);

      const response = await AxiosService.post<any, IAxiosResponse<any>>(
        axios.urlAdd,
        { product: payload.product }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchWishlist;
