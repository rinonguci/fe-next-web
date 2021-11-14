const axios = require("axios");

axios.defaults.baseURL = "https://shopme-three.vercel.app/api/v1/";
const axiosRepository = axios.create({
  timeout: 10000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN",
    "Content-Type": "application/json",
  },
});

const axiosData = {
  url: "categories/320/products",
};

const fetchCategories = {
  getCategories: async () => {
    try {
      const response = await axiosRepository.get(axiosData.url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

fetchCategories.getCategories().then((value) => {
  console.log(value);
});
