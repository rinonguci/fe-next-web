import type { AppProps } from "next/app";
import { FC, Fragment, useEffect } from "react";

import { wrapper } from "@redux/store";
import Toastify from "@components/Toastify";

import "@common/styles/base.scss";
import GlobalStyles from "@common/styles/GlobalStyles";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useAppSelector } from "@hooks/redux";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { overflow } = useAppSelector(
    (state) => state.uiStateReducers.bodyReducer
  );

  useEffect(() => {
    if (overflow) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [overflow]);

  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toastify />
    </Fragment>
  );
};

export default wrapper.withRedux(MyApp);
