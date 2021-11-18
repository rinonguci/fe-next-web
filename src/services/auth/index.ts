import {
  ILoginPayload,
  ILoginDataReponse,
  ISignupPayload,
  ISignupStatus,
  IUser,
} from "@interfaces/auth";

import AxiosService from "@common/utils/axios";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";
import handleError from "@common/utils/axios/handleError";

const axios = {
  urlSignup: "user/signup",
  urlLogin: "user/login",
  urlMe: "user/me",
};

const fetchAuth = {
  signup: async (payload: ISignupPayload) => {
    try {
      const response = await AxiosService.post<
        any,
        IAxiosResponse<ISignupStatus>,
        ISignupPayload
      >(axios.urlSignup, payload);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (payload: ILoginPayload): Promise<ILoginDataReponse> => {
    try {
      const response = await AxiosService.post<
        any,
        IAxiosResponse<ILoginDataReponse>,
        ILoginPayload
      >(axios.urlLogin, payload);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getMe: async (): Promise<IUser> => {
    try {
      const response = await AxiosService.post<any, IAxiosResponse<IUser>>(
        axios.urlMe
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchAuth;
