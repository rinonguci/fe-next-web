import { FC } from "react";
import { ToastContainer } from "react-toastify";
import tw from "twin.macro";

interface IToastify {}

const Toastify: FC<IToastify> = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toastify;

const ToastifyContainer = tw.div``;
