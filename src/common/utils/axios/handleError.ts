import { AxiosError } from "axios";

const handleError = (err: any) => {
  let message =
    typeof err.response !== "undefined"
      ? err.response.data.message
      : err.message;
  return message;
};

export default handleError;
