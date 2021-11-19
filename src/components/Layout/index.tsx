import Auth from "@components/Auth";
import Loading from "@components/Loading";
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
const NavDetailMobileContaier = styled.div`
  ${tw`fixed top-[144px]`}
`;

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <Loading />
      <Auth />
      <Header />
      <Wrapper id="wrapper">
        {children}
        <Footer />
      </Wrapper>
      <NavDetailMobileContaier>
        <NavDetailMobile />
      </NavDetailMobileContaier>
    </Fragment>
  );
};

export default Layout;
