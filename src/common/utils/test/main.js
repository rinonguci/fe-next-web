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
  url: "categories",
};

const fetchCategories = {
  getCategories: async () => {
    try {
      const response1 = await AxiosService.get(axiosData.url);
      const response2 = await AxiosService.get(axiosData.url);
      const response3 = await AxiosService.get(axiosData.url);
      const response4 = await AxiosService.get(axiosData.url);
      const response5 = await AxiosService.get(axiosData.url);
      const response6 = await AxiosService.get(axiosData.url);
      const response7 = await AxiosService.get(axiosData.url);
      const response8 = await AxiosService.get(axiosData.url);

      return response1.data;
    } catch (error) {}
  },
};

Promise.all(fetchCategories.getCategories).then((value) => {
  console.log(value);
});
