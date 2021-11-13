const axios = require("axios");

axios.defaults.baseURL = "https://api-web-summon.vercel.app/api/v1/";
const axiosRepository = axios.create({ timeout: 10000 });

const axiosData = {
  url: "categories",
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
