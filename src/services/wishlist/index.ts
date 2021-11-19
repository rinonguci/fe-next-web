import AxiosService from "@common/utils/axios";

const axios = {
  urlGet: "wishlist",
  urlAdd: "wishlist/add",
};

const fetchWishlist = {
  async get() {
    const response = await AxiosService.get(axios.urlGet);
    return response;
  },
  async add(payload: any): Promise<any> {
    const response = await AxiosService.post(axios.urlAdd, payload);
    return response;
  },
};

export default fetchWishlist;
