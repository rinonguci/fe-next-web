import type { AppProps } from "next/app";
import { Fragment } from "react";

import { wrapper } from "@redux/store";
import Toastify from "@components/Toastify";

import "@common/styles/base.scss";
import GlobalStyles from "@common/styles/GlobalStyles";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toastify />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
