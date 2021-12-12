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

axios.defaults.baseURL = "https://proxysummon.vercel.app/";
// axios.defaults.baseURL = "http://localhost:3000";

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
      return await // await this.#instance.get(url, { params })
      (
        await this.#instance.post("/", {
          url: url,
          method: "get",
          data: params,
        })
      ).data;
    } catch (error) {
      return error;
    }
  }

  async post(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.post("/", {
          url: url,
          method: "post",
          data: data,
        })
      ).data;
    } catch (error) {
      return error;
    }
  }

  async put(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.post("/", {
          url: url,
          method: "put",
          data: data,
        })
      ).data;
    } catch (error) {
      return error;
    }
  }

  async patch(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.post("/", {
          url: url,
          method: "patch",
          data: data,
        })
      ).data;
    } catch (error) {
      return error;
    }
  }

  async delete(url: string, data?: IDataAxios): IResponseAxios {
    try {
      return await (
        await this.#instance.post("/", {
          url: url,
          method: "delete",
          data: data,
        })
      ).data;
    } catch (error) {
      return error;
    }
  }
}

export default new AxiosService();
