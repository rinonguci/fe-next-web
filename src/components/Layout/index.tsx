import StorageToken from "@common/utils/storage";
import Auth from "@components/Auth";
import Loading from "@components/Loading";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { addUserSuccess } from "@redux/slides/data/auth";
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
  const dispatch = useAppDispatch();
  const { overflowMenu } = useAppSelector(
    (state) => state.uiStateReducers.bodyReducer
  );
  const [isActive, setIsActive] = useState<boolean>(overflowMenu);

  useEffect(() => {
    if (overflowMenu) {
      setIsActive(true);
      return;
    }

    setTimeout(() => {
      setIsActive(false);
    }, 300);
  }, [overflowMenu]);

  useEffect(() => {
    let user = StorageToken.getUser();

    if (!user) return;

    console.log(user);

    dispatch(addUserSuccess({ user: user }));
  }, []);

  return (
    <Fragment>
      <Loading />
      <Auth />
      <Header />
      <Wrapper id="wrapper">
        {children}
        <Footer />
      </Wrapper>
      <NavDetailMobileContaier isActive={overflowMenu}>
        {isActive && <NavDetailMobile />}
      </NavDetailMobileContaier>
    </Fragment>
  );
};

export default Layout;
