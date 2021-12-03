import AxiosService from "@common/utils/axios";

const url = {
  signup: "user/signup",
  login: "user/login",
  me: "user/me",
  verify: "user/verify",
  forgotPassword: "user/forgot-password",
  changePassword: "user/update-password",
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
    const response = await AxiosService.patch(url.changePassword, payload);
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
};

export default fetchAuth;
