import AxiosService from "@common/utils/axios";

const url = {
  signup: "user/signup",
  login: "user/login",
  me: "user/me",
  verify: "user/verify",
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
  async getMe() {
    const response = await AxiosService.get(url.me);
    return response;
  },
  async verify(payload: any) {
    const response = await AxiosService.post(url.verify, payload);
    return response;
  },
};

export default fetchAuth;
