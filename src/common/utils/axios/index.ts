import { IDataAxios, IResponseAxios } from "./interface";
import handleError from "@common/utils/axios/handleError";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export type Method =
  | "get"
  | "delete"
  | "head"
  | "options"
  | "post"
  | "put"
  | "patch"
  | "purge"
  | "link"
  | "unlink";

// axios.defaults.baseURL = "https://shopme-three.vercel.app/api/v1/";
axios.defaults.baseURL = "https://wwwshopme.herokuapp.com/api/v1";
// axios.defaults.baseURL = "http://localhost:8080/ROOTk/api/v1";

class AxiosService {
  #instance: AxiosInstance;
  constructor() {
    const instance = axios.create({
      timeout: 30000,
      headers: {
        // "Content-Type": "application/json
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(async (config) => {
      const ISSERVER = typeof window === "undefined";
      let token: string = "";
      if (!ISSERVER) {
        token = localStorage.getItem("token") || "";
      }

      return {
        ...config,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(handleError(error));
      }
    );

    this.#instance = instance;
  }

  async get(url: string, params?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.get(url, { params })
      ).data;
    } catch (error) {
      return error;
    }
  }

  async post(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.post(url, data)
      ).data;
    } catch (error) {
      return error;
    }
  }

  async put(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.put(url, data)
      ).data;
    } catch (error) {
      return error;
    }
  }

  async patch(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.patch(url, data)
      ).data;
    } catch (error) {
      return error;
    }
  }

  async delete(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.delete(url, data)
      ).data;
    } catch (error) {
      return error;
    }
  }
}

export default new AxiosService();
