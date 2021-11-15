import { useAppSelector } from "@hooks/redux";
import { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Footer from "./components/Footer";
import Header from "./components/Header";
import NavDetailMobile from "./components/NavDetailMobile";

const Wrapper = styled.div`
  ${tw`pt-[145.5px] lg:pt-[125.5px] pb-20`}
`;
const NavDetailMobileContaier = styled.div<{ isActive: boolean }>`
  ${tw`fixed top-[145.5px] transition-transform`}
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(-286px)"};
`;

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => {
  const { overflow } = useAppSelector(
    (state) => state.uiStateReducers.bodyReducer
  );
  const [isActive, setIsActive] = useState<boolean>(overflow);

  useEffect(() => {
    if (overflow) {
      setIsActive(true);
      return;
    }

    setTimeout(() => {
      setIsActive(false);
    }, 300);
  }, [overflow]);

  return (
    <Fragment>
      <Header />
      <Wrapper id="wrapper">
        {children}
        <Footer />
      </Wrapper>
      <NavDetailMobileContaier isActive={overflow}>
        {isActive && <NavDetailMobile />}
      </NavDetailMobileContaier>
    </Fragment>
  );
};

export default Layout;
