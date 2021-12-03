import Color from "color";
import { CSSProperties, FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IconSVGContainer = styled.svg`
  ${tw`bg-transparent fill-[transparent] h-9 w-9`}
  color: currentColor;
  use {
    color: currentColor;
    &:hover {
      ${tw`text-green-500`}
    }
  }
`;

interface IIconSVG {
  iconHref: string;
  color?: Color;
  className?: string;
  style?: CSSProperties;
}

const IconSVG: FC<IIconSVG> = ({ iconHref, className, style }) => {
  return (
    <IconSVGContainer style={style} className={className}>
      <use href={iconHref}></use>
    </IconSVGContainer>
  );
};

export default IconSVG;
