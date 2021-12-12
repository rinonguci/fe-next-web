import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Check from "./components/Check";
import { useRouter } from "next/router";
import { IFacet } from "@redux/types/product";

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
  ${tw`border-l border-b  border-black-lv1`}

  height: 7px;
  aspect-ratio: 1/1;

  transform: rotate(135deg);

  transition: transform 300ms cubic-bezier(0.19, 1, 0.22, 1);

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(-45deg);
    `}
`;

const Box = styled.div`
  ${tw`flex items-center gap-4`}
`;
const Clear = styled.span`
  ${tw`text-black-lv3 font-normal`}
`;

interface IFilter {
  data: IFacet;
}

const listCloumn2 = ["Clothing sizes", "Colors"];

const Filter: FC<IFilter> = ({ data }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);

  useEffect(() => {
    let check = document?.querySelectorAll(
      `[data-checkedfilter=true][data-namefilter="${data.name
        ?.split(" ")
        ?.join("")}"]`
    );

    if (check.length > 0) {
      setIsActiveFilter(true);
    } else {
      setIsActiveFilter(false);
    }
  }, [router.query]);

  const handleActive = (e: any) => {
    let element = e.target as HTMLDivElement;

    if (element.dataset.element) {
      return;
    }

    setIsActive(!isActive);
  };

  const handleClear = () => {
    let checked = Array.from(
      document.querySelectorAll(
        `[data-checkedfilter=true][data-namefilter=${data.name
          ?.split(" ")
          ?.join("")}]`
      )
    );

    if (checked.length === 0) return;

    let arrId = checked.map((value) => (value as HTMLElement).dataset.filterid);

    let url = new URL(location.origin + router.asPath);
    let p = url.searchParams.getAll("p");
    let sort = url.searchParams.getAll("sort");

    let newParam = p.filter((value) => arrId.indexOf(value) === -1);
    // setIsActiveFilter(false);
    router.push(
      { pathname: url.pathname, query: { p: newParam, sort: sort } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <FilterContainer>
      <FilterTitle onClick={handleActive}>
        <Text>{data.name}</Text>
        <Box>
          {isActiveFilter && (
            <Clear data-element="clear" onClick={handleClear}>
              Clear
            </Clear>
          )}
          <Arrow isActive={isActive} />
        </Box>
      </FilterTitle>

      <FilterList
        gridColumn={listCloumn2.includes(data.name) ? 2 : 1}
        isActive={isActive}
      >
        {data?.values?.map((value) => (
          <FilterItem key={value.id}>
            <Check
              nameFilter={data.name?.split(" ")?.join("")}
              id={value.id}
              name={value.name}
            />
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default Filter;
