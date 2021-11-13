import type { AppProps } from "next/app";
import { Fragment } from "react";

import { wrapper } from "@redux/store";
import GlobalStyles from "@common/styles/GlobalStyles";

import "tailwindcss/tailwind.css";
import "@common/styles/base.scss";

import "react-toastify/dist/ReactToastify.css";
import Toastify from "@components/Toastify";

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
