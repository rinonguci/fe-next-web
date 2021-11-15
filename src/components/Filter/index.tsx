import { IFacet } from "@interfaces/redux/product";
import { FC, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import Check from "./components/Check";

const FilterContainer = styled.div`
  ${tw``}
`;

const FilterTitle = styled.span`
  ${tw`flex justify-between items-center relative text-base font-medium text-black-lv2 py-5 border-t`}
`;
const FilterList = styled.ul<{ gridColumn?: 1 | 2; isActive: boolean }>`
  ${tw`grid gap-6 overflow-hidden`}
  ${({ gridColumn = 1 }) =>
    gridColumn === 1 ? tw`grid-cols-1` : tw`grid-cols-2`};
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
          visibility: visible;
          max-height: auto;
          ${tw`pb-6`}
        `
      : css`
          visibility: hidden;
          opacity: 0;
          max-height: 0;
        `};

  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const FilterItem = styled.li`
  ${tw``}
`;

const Text = styled.span`
  ${tw``}
`;

const Arrow = styled.span<{ isActive: boolean }>`
  ${tw`relative top-1/2`}

  &::before {
    ${tw`border-l border-b  border-black-lv1`}
    content: "";
    position: absolute;
    height: 7px;
    aspect-ratio: 1/1;

    transform: rotate(135deg);

    right: 26px;
    transition: transform 300ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        transform: rotate(-45deg);
      }
    `}
`;
interface IFilter {
  data: IFacet;
}

const listCloumn2 = ["Clothing sizes", "Colors"];

const Filter: FC<IFilter> = ({ data }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <FilterContainer>
      <FilterTitle onClick={handleActive}>
        <Text>{data.name}</Text>
        <Arrow isActive={isActive} />
      </FilterTitle>

      <FilterList
        gridColumn={listCloumn2.includes(data.name) ? 2 : 1}
        isActive={isActive}
      >
        {data.values.map((value) => (
          <FilterItem key={value.id}>
            <Check onClick={() => {}} id={value.id} name={value.name} />
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default Filter;
