import { useAppSelector } from "@hooks/redux";
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

interface IBreadcrumb {}

const Breadcrumb: FC<IBreadcrumb> = () => {
  const { breadcrumb } = useAppSelector((state) => state.uiReducers);
  return (
    <BreadcrumbContainer>
      {breadcrumb?.map((value, index) => (
        <Item key={index}>{`${value}`}</Item>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
