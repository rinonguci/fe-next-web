import Color from "color";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IconSVGContainer = styled.svg`
  ${tw`bg-transparent fill-[transparent] h-9 w-9`}
  use {
    color: currentColor;
  }
`;

interface IIconSVG {
  iconHref: string;
  color?: Color;
}

const IconSVG: FC<IIconSVG> = ({ iconHref }) => {
  return (
    <IconSVGContainer>
      <use href={iconHref}></use>
    </IconSVGContainer>
  );
};

export default IconSVG;
