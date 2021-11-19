import { FC } from "react";
import tw from "twin.macro";
import styled, { CSSProperties } from "styled-components";
import IconSVG from "@designs/IconSVG";
import Link from "@designs/Link";

const IconLeftContainerLink = styled.div`
  ${tw``}
`;
const IconLeftContainer = styled.div`
  ${tw``}
`;
const IconLink = styled.a`
  ${tw`flex flex-col items-center gap-3`}
`;

const IconTitle = styled.span`
  ${tw`uppercase md:hidden text-xs`}
`;

interface IIconLeft {
  href?: string;
  title?: string;
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
    <Link href={href || "/notfound"}>
      <IconLeftContainerLink>
        <IconLink className={className}>
          <IconSVG iconHref={icon} />

          <IconTitle>{title}</IconTitle>
        </IconLink>
      </IconLeftContainerLink>
    </Link>
  ) : (
    <IconLeftContainer style={style} onClick={onClick}>
      <IconLink>
        <IconSVG iconHref={icon} />
        <IconTitle>{title}</IconTitle>
      </IconLink>
    </IconLeftContainer>
  );
};

export default IconLeft;
