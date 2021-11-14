import { IFacet } from "@interfaces/redux/product";
import { FC, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import Check from "./components/Check";

const FilterContainer = styled.div`
  ${tw`max-w-[260px]`}
`;

const FilterTitle = styled.span`
  ${tw`block relative text-base font-medium text-black-lv2 py-5 border-t`}

  &::before {
    ${tw`border-b border-r border-black-lv1`}
    content: "";
    position: absolute;
    height: 8px;
    aspect-ratio: 1/1;

    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    right: 20px;
  }
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
      <FilterTitle onClick={handleActive}>{data.name}</FilterTitle>

      <FilterList
        gridColumn={listCloumn2.includes(data.name) ? 2 : 1}
        isActive={isActive}
      >
        {data.values.map((value) => (
          <FilterItem key={value.id}>
            <Check id={value.id} name={value.name} />
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default Filter;
