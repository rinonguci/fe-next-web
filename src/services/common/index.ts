import AxiosService from "@common/utils/axios";

const url = {
  getCategories: "categories",
};

const fetchCommon = {
  async getCategories() {
    const response = await AxiosService.get(url.getCategories);
    return response;
  },
};

export default fetchCommon;
