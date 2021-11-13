import { useAppSelector } from "@hooks/redux";
import { INavItem } from "@interfaces/UI/INavItem";
import { FC, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import HeaderTop from "./components/HeaderTop";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";

const HeaderContainer = styled.header`
  ${tw`fixed top-0 right-0 left-0 z-50 bg-white`}
`;
const HeaderBox = styled.header`
  ${tw`h-[145.5px] relative`}
`;
const HeaderTopContainer = styled.div`
  ${tw`relative`};
`;

const NavContainer = styled.div`
  ${tw`container mx-auto pt-12 pb-5`};
`;

interface IHeader {}

const Header: FC<IHeader> = () => {
  const { categories } = useAppSelector((state) => state.categoriesReducer);

  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderTopContainer>
          <HeaderTop />
        </HeaderTopContainer>

        <NavContainer>
          {categories && <Nav list={categories} mediaQuery="md" />}
          <NavMobile list={listNavMobile} mediaQuery="md" />
        </NavContainer>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;

const listNavMobile: Array<INavItem> = [
  {
    link: "/new-in",
    name: "What's New",
  },
  {
    link: "/designer",
    name: "Designers",
  },
  {
    link: "/lifestyle",
    name: "Lifestyle",
  },
];
