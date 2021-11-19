import type { AppProps } from "next/app";
import { FC, useEffect } from "react";

import { wrapper } from "@redux/store";
import Toastify from "@components/Toastify";

import "@common/styles/base.scss";
import GlobalStyles from "@common/styles/GlobalStyles";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useAppSelector } from "@hooks/redux";

import { PersistGate } from "redux-persist/lib/integration/react";
import { useStore } from "react-redux";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { overflowMenu, overflowUser } = useAppSelector(
    (state) => state.uiReducers
  );

  const store = useStore();

  useEffect(() => {
    if (overflowMenu) {
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");
    document.body.classList.add("overflow-auto");
  }, [overflowMenu]);

  useEffect(() => {
    if (overflowUser) {
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");
    document.body.classList.add("overflow-auto");
  }, [overflowUser]);

  return process.browser ? (
    <PersistGate persistor={store?.__persistor} loading={<div>Loading</div>}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toastify />
    </PersistGate>
  ) : (
    <PersistGate persistor={store as any}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toastify />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
