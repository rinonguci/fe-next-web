import Auth from "@components/Auth";
import Loading from "@components/Loading";
import { useAppSelector } from "@hooks/redux";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";
import React, { useRef } from "react";

import { FC, Fragment, ReactChild, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Footer from "./components/Footer";
import Header from "./components/Header";
import NavDetailMobile from "./components/NavDetailMobile";
import Popup from "./components/Popup";

const Wrapper = styled.div`
  ${tw`pt-[145.5px] lg:pt-[125.5px] pb-20`}
`;
const NavDetailMobileContaier = styled.div`
  ${tw`fixed top-[144px]`}
`;

interface ILayout {}

interface IPopupContext {
  refPopup?: React.RefObject<HTMLDivElement>;
  isPopup?: boolean;
  element?: JSX.Element | undefined;
  setElement?: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
}
export const PopupContext = React.createContext<IPopupContext>({});

const Layout: FC<ILayout> = ({ children }) => {
  const [element, setElement] = useState<JSX.Element>();

  const refPopup = useRef<HTMLDivElement>(null);
  const [isPopup, setIsPopup] = useToggleAndCloseVer2(refPopup);

  useEffect(() => {
    if (element) {
      setIsPopup(true);
    }
  }, [element]);

  return (
    <PopupContext.Provider
      value={{
        element: element,
        setElement: setElement,
        isPopup: isPopup,
        refPopup: refPopup,
      }}
    >
      <Loading />
      {isPopup && <Popup />}
      <Auth />
      <Header />
      <Wrapper id="wrapper">
        {children}
        <Footer />
      </Wrapper>
      <NavDetailMobileContaier>
        <NavDetailMobile />
      </NavDetailMobileContaier>
    </PopupContext.Provider>
  );
};

export default Layout;
