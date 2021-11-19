import { FC } from "react";
import tw from "twin.macro";
import { INavItem } from "@interfaces/UI/INavItem";
import { IMediaQuery } from "@interfaces/UI/IMediaQuery";
import styled from "styled-components";
import Link from "@designs/Link";

const NavMobileContainer = styled.div`
  ${tw`mt-16`}
`;
const NavMobileList = styled.ul`
  ${tw`text-sm font-medium uppercase line-height[18px] flex justify-between px-5`}
`;
const NavMobileItem = styled.li`
  ${tw`pb-1.5`}
`;

interface INavMobile {
  list: Array<INavItem>;
  mediaQuery: IMediaQuery;
}

const NavMobile: FC<INavMobile> = ({ list, mediaQuery }) => {
  return (
    <NavMobileContainer className={`${mediaQuery}:block hidden`}>
      <NavMobileList>
        {list?.map((value: INavItem, index: number) => (
          <NavMobileItem key={index}>
            <Link href={value.link}>
              <a>{value.name}</a>
            </Link>
          </NavMobileItem>
        ))}
      </NavMobileList>
    </NavMobileContainer>
  );
};

export default NavMobile;
