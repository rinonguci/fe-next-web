import AxiosService from "@common/utils/axios";

const url = {
  get: "cart",
  add: "cart/add-to-cart",
  bill: "bill",
  getBill: "bill/my-bill",
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
  async updateQuantity(payload: any): Promise<any> {
    const response = await AxiosService.patch(url.get, payload);
    return response;
  },
  async addBill(payload: any): Promise<any> {
    const response = await AxiosService.post(url.bill, payload);
    return response;
  },
  async getBill(): Promise<any> {
    const response = await AxiosService.get(url.getBill);
    return response;
  },
};

export default fetchCart;
