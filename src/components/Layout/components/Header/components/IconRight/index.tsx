import { FC } from "react";
import Link from "next/link";
import tw from "twin.macro";
import styled from "styled-components";

const IconRightContainer = styled(Link)`
  ${tw``}
`;
const IconLink = styled.a`
  ${tw`flex items-center gap-3`}
`;
const IconSVG = styled.svg`
  ${tw`bg-transparent fill-[transparent] h-9 w-9`}
`;
const IconTitle = styled.p`
  ${tw`md:hidden text-sm`}
`;
const ItemCount = styled.span`
  ${tw`block uppercase text-xs`}
`;

interface IIconRight {
  href: string;
  icon: string;
  title: string;
  itemCount: number;
}

const IconRight: FC<IIconRight> = ({ href, icon, title, itemCount }) => {
  return (
    <IconRightContainer passHref href={href}>
      <IconLink>
        <IconSVG>
          <use xlinkHref={icon} />
        </IconSVG>
        <IconTitle>
          {title}
          <ItemCount>{itemCount} ITEMS</ItemCount>
        </IconTitle>
      </IconLink>
    </IconRightContainer>
  );
};

export default IconRight;
