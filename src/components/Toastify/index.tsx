import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import tw from "twin.macro";

import { useAppSelector } from "@hooks/redux";
import { closeError, closeSuccess } from "@redux/slides/uiState/notify";

interface IToastify {}

const Toastify: FC<IToastify> = () => {
  const dispatch = useDispatch();
  const { success, error, message } = useAppSelector(
    (state) => state.uiStateReducers.notifyReducer
  );

  useEffect(() => {
    if (!success) return;

    toast.success(`🦄 ${message}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(closeSuccess());
  }, [success]);

  useEffect(() => {
    if (!error) return;

    toast.error(`🦄 ${message}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(closeError());
  }, [error]);

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
