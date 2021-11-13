import { FC } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const NavDetailMobileItemContainer = styled.div<{ iconLeft: boolean }>`
  ${tw`py-6 px-4 border-b relative cursor-pointer hover:bg-gray-100`}

  ${({ iconLeft }) =>
    iconLeft &&
    css`
      &:before {
        content: "";
        position: absolute;
        height: 10px;
        aspect-ratio: 1 / 1;

        border-top: 2.8px solid #444;
        border-right: 2.8px solid #444;
        transform: rotate(45deg) translateY(-50%);
        top: 50%;
        right: 20px;
      }
    `}
`;

const Text = styled.span`
  ${tw``}
`;

interface INavDetailMobileItem {
  onClick?: () => void;
  iconLeft?: boolean;
}

const NavDetailMobileItem: FC<INavDetailMobileItem> = ({
  children,
  onClick,
  iconLeft = false,
}) => {
  return (
    <NavDetailMobileItemContainer
      data-element="menu-mobile-item"
      onClick={onClick}
      iconLeft={iconLeft}
    >
      <Text data-element="menu-mobile-text">{children}</Text>
    </NavDetailMobileItemContainer>
  );
};

export default NavDetailMobileItem;
