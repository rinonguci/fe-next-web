import AxiosService from "@common/utils/axios";

const url = {
  get: "cart",
  add: "cart/add-to-cart",
};

const fetchCart = {
  async get() {
    const response = await AxiosService.get(url.get);
    return response;
  },
  async add(payload: any): Promise<any> {
    const response = await AxiosService.post(url.add, payload);
    return response;
  },
};

export default fetchCart;
