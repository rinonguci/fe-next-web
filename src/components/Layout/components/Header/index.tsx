import { useAppSelector } from "@hooks/redux";
import { INavItem } from "@interfaces/UI/INavItem";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderTop from "./components/HeaderTop";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";

const HeaderContainer = styled.div<{ isScroll: boolean }>`
  ${tw`fixed top-0 right-0 left-0 z-50 bg-white`}
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${({ isScroll }) =>
    isScroll ? "translateY(-100px)" : "translateY(0)"};
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
  const { categories } = useAppSelector((state) => state.categoriesReducers);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  let lastScrollTop = useRef<number>(0);

  const handleScroll = useCallback((e) => {
    let st = document.body.getBoundingClientRect().top;

    if (
      st > lastScrollTop.current &&
      document.documentElement.scrollTop > -30
    ) {
      setIsScroll(false);
    } else {
      if (document.documentElement.scrollTop > 200) {
        setIsScroll(true);
      }
    }
    lastScrollTop.current = st;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <HeaderContainer isScroll={isScroll}>
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
