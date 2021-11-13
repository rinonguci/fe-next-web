import { FC } from "react";
import Link from "next/link";
import tw from "twin.macro";
import styled, { CSSProperties } from "styled-components";

const IconLeftContainerLink = styled(Link)`
  ${tw``}
`;
const IconLeftContainer = styled.div`
  ${tw``}
`;
const IconLink = styled.a`
  ${tw`flex flex-col items-center gap-3`}
`;
const IconSVG = styled.svg`
  ${tw`bg-transparent fill-[transparent] h-9 w-9`}
`;
const IconTitle = styled.span`
  ${tw`uppercase md:hidden text-xs`}
`;

interface IIconLeft {
  href: string;
  title: string;
  icon: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

const IconLeft: FC<IIconLeft> = ({
  href,
  icon,
  title,
  onClick,
  style,
  className,
}) => {
  return !onClick ? (
    <IconLeftContainerLink passHref href={href}>
      <IconLink className={className}>
        <IconSVG data-click="open-menu">
          <use xlinkHref={icon} />
        </IconSVG>
        <IconTitle>{title}</IconTitle>
      </IconLink>
    </IconLeftContainerLink>
  ) : (
    <IconLeftContainer style={style} onClick={onClick}>
      <IconLink>
        <IconSVG data-click="open-menu">
          <use xlinkHref={icon} />
        </IconSVG>
        <IconTitle>{title}</IconTitle>
      </IconLink>
    </IconLeftContainer>
  );
};

export default IconLeft;
