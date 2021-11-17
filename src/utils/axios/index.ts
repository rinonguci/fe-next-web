import axios, { AxiosInstance } from "axios";

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

axios.defaults.baseURL = "https://shopme-three.vercel.app/api/v1/";

class AxiosService {
  #instance: AxiosInstance;
  constructor() {
    const instance = axios.create({
      timeout: 20000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.#instance = instance;
  }
  getInstance() {
    return this.#instance;
  }
}

export default new AxiosService().getInstance();
