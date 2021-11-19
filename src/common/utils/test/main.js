const axios = require("axios");

axios.defaults.baseURL = "https://shopme-three.vercel.app/api/v1/";
const AxiosService = axios.create({
  timeout: 10000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN",
    "Content-Type": "application/json",
  },
});

const axiosData = {
  url: "categories1",
};

const fetchCategories = {
  getCategories: async () => {
    try {
      const response1 = await AxiosService.get(axiosData.url);

      return response1.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

fetchCategories.getCategories().then((value) => {
  console.log(value);
});
