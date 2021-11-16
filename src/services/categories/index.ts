import { ICategory } from "@interfaces/redux";

import axiosRepository from "@utils/axios";
import { IAxiosResponse } from "@interfaces/common/IAxiosResponse";

const axios = {
  url: "categories",
};

const fetchCategories = {
  getCategories: async () => {
    try {
      const response = await axiosRepository.get<
        IAxiosResponse<Array<ICategory>>
      >(axios.url);
    
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchCategories;
