import AxiosService from "@common/utils/axios";

const url = {
  signup: "signup",
  login: "login",
  me: "me",
  verify: "verify",
  forgotPassword: "forgot-password",
  changePassword: "user/update-password",
  resetPassword: "reset-password",
  uploadImage: "user/me",
};

const fetchAuth = {
  async signup(payload: any) {
    const response = await AxiosService.post(url.signup, payload);
    return response;
  },
  async login(payload: any) {
    const response = await AxiosService.post(url.login, payload);
    return response;
  },
  async changePassword(payload: any) {
    const response = await AxiosService.put(url.changePassword, payload);
    return response;
  },
  async getMe() {
    const response = await AxiosService.get(url.me);
    return response;
  },
  async verify(payload: any) {
    const response = await AxiosService.post(url.verify, payload);
    return response;
  },
  async forgotPassword(payload: any) {
    const response = await AxiosService.post(url.forgotPassword, payload);
    return response;
  },
  async resetPassword(payload: any) {
    const response = await AxiosService.put(url.resetPassword, payload);
    return response;
  },
  async uploadImage(payload: any) {
    const response = await AxiosService.put(url.uploadImage, payload);
    return response;
  },
};

export default fetchAuth;
