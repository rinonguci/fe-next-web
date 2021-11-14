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

// axios.defaults.baseURL = "https://api-web-summon.vercel.app/api/v1/";
axios.defaults.baseURL = "https://shopme-three.vercel.app/api/v1/";
const axiosRepository: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:77.0) Gecko/20100101 Firefox/77.0",
    "Content-Type": "application/json",
  },
});

export default axiosRepository;
