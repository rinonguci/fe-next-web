import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BreadcrumbContainer = styled.div`
  ${tw`text-sm pt-2 pb-6`}
`;
const Item = styled.span`
  ${tw`pr-6 relative text-gray-500`}

  &:not(:last-child):before {
    content: "";
    position: absolute;

    top: 50%;
    height: 6px;
    aspect-ratio: 1 / 1;

    top: 50%;
    right: 3px;
    transform: rotate(45deg) translate(-50%);
    ${tw`border-t border-r border-black-lv3`}
  }
`;

interface IBreadcrumb {
  titles: Array<String>;
}

const Breadcrumb: FC<IBreadcrumb> = ({ titles }) => {
  return (
    <BreadcrumbContainer>
      {titles.map((value, index) => (
        <Item key={index}>{`${value}`}</Item>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
