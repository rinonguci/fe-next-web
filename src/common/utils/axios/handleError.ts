const handleError = (err: any) => {
  let message =
    typeof err.response !== "undefined"
      ? err.response.data.message
      : err.message;

  if (
    (message as string).indexOf(
      "JWT String argument cannot be null or empty"
    ) !== -1
  )
    message = "Please login to use this feature";

  return message;
};

export default handleError;
