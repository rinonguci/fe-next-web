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
    "Content-Type": "application/json",
  },
});

export default axiosRepository;
