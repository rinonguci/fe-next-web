import AxiosService from "@common/utils/axios";

const url = {
  get: "cart",
  add: "cart/add-to-cart",
  bill: "bill",
  getBill: "bill/my-bill",
  deleteBill: (id: string) => `cart/${id}`,
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
    debugger;
    const response = await AxiosService.put(url.get, payload);
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
  async deleteCart(payload: any): Promise<any> {
    const response = await AxiosService.delete(url.deleteBill(payload.id));
    return response;
  },
};

export default fetchCart;
