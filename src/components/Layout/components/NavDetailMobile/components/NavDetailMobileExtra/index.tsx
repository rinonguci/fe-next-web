import { FC } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { ICategory } from "@interfaces/redux";
import NavDetailMobileItem from "../NavDetailMobileItem";
import Link from "@designs/Link";

const NavDetailMobileExtraContainer = styled.div<{ stateExtra: boolean }>`
  ${tw`absolute w-[286px]  bg-white top-0 bottom-0 overflow-y-scroll`}
  transform: ${({ stateExtra }) =>
    stateExtra ? `translateX(0)` : `translateX(286px)`};
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const NavDetailMobileExtraBox = styled.div`
  ${tw``}
`;

const NavDetailMobileExtraTitle = styled.div`
  ${tw`text-base font-medium px-4 mb-2 mt-4 cursor-pointer`}
`;

const NavDetailMobileExtraList = styled.ul`
  ${tw`flex flex-col`}
`;
const BackToMenu = styled.div`
  ${tw`pl-14 border-b border-t py-6 relative text-lg font-medium text-gray-700 cursor-pointer`}

  &:before {
    content: "";
    position: absolute;
    height: 10px;
    aspect-ratio: 1 / 1;

    border-bottom: 2.8px solid #444;
    border-left: 2.8px solid #444;
    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    left: 10px;
  }
`;

interface INavDetailMobileExtra {
  onClick?: () => void;
  stateExtra: boolean;
  data?: Array<ICategory> | null;
}

const NavDetailMobileExtra: FC<INavDetailMobileExtra> = ({
  onClick,
  stateExtra,
  data,
}) => {
  return (
    <NavDetailMobileExtraContainer stateExtra={stateExtra}>
      <BackToMenu data-element="menu-extra" onClick={onClick}>
        Back to Main Menu
      </BackToMenu>
      {data &&
        data.map((value) => (
          <NavDetailMobileExtraBox key={value._id}>
            <Link href={`${value._id}/${value.slug}`}>
              <NavDetailMobileExtraTitle>
                {value.name}
              </NavDetailMobileExtraTitle>
            </Link>
            <NavDetailMobileExtraList>
              {value?.children?.map((value) => (
                <Link key={value._id} href={`${value._id}/${value.slug}`}>
                  <NavDetailMobileItem>{value.name}</NavDetailMobileItem>
                </Link>
              ))}
            </NavDetailMobileExtraList>
          </NavDetailMobileExtraBox>
        ))}
    </NavDetailMobileExtraContainer>
  );
};

export default NavDetailMobileExtra;
