import { ComponentProps, FC, memo } from "react";

import tw from "twin.macro";
import styled, { css } from "styled-components";

import { IMediaQuery } from "@interfaces/UI/IMediaQuery";
import { ICategory } from "@interfaces/redux";
import NavDetail from "../NavDetail";
import Link from "@designs/Link";

const NavContainer = styled.div`
  ${tw`justify-center`}
`;
const NavList = styled.ul`
  ${tw`flex list-none gap-8 z-50`}
`;

const NavText = styled.span`
  ${tw`uppercase cursor-pointer text-[1.2em] pb-3 font-medium`}
`;

const NavItem = styled.li`
  ${tw``}
  &:hover ${NavText} {
    border-bottom: 5px solid #1b1b1a;
  }

  @media (max-width: 1023px) {
    &:hover ${NavText} {
      border-bottom: none;
    }
  }
`;

const NavDetailContainer = styled.div`
  ${tw`lg:hidden`}

  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in;
`;

const LinkWrap = styled.div`
  &:hover ${NavDetailContainer} {
    opacity: 100;
    visibility: visible;
  }
`;

interface INav {
  list: Array<ICategory>;
  mediaQuery: IMediaQuery;
}

const Nav: FC<INav> = ({ list, mediaQuery }) => {
  return (
    <NavContainer className={`${mediaQuery}:hidden flex`}>
      <NavList>
        {list?.map((value: ICategory, index: number) => (
          <NavItem key={index}>
            <LinkWrap>
              <Link href={`/category/${value._id}/${value.slug}`}>
                <NavText>{value.name}</NavText>
              </Link>
              <NavDetailContainer>
                <NavDetail data={value.children} />
              </NavDetailContainer>
            </LinkWrap>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default memo(Nav, (prevMovie: INav, nextMovie: INav) => {
  return prevMovie.list === nextMovie.list;
});
