import useToggleAndClose from "@hooks/useToggleAndClose";
import { IItemSelect } from "@interfaces/UI/IItemSelect";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Skeleton from "react-loading-skeleton";

const SelectContainer = styled.div`
  ${tw`text-lg bg-white  lg:max-w-full max-w-[260px]`}
`;
const SelectBox = styled.div`
  ${tw`relative `}
`;
const Selected = styled.div`
  ${tw`px-6 py-6 relative w-full flex items-center cursor-default justify-between`}
`;
const SelectList = styled.ul<{ isActive: boolean }>`
  ${tw`z-10 absolute transition-opacity invisible opacity-0 w-[110%] bg-white`}
  box-shadow: 0 0 10px #00000029;
  left: 50%;
  transform: translateX(-50%);

  ${({ isActive }) => isActive && tw`visible opacity-100`}
`;

const SelectItem = styled.li<{ isActive?: boolean }>`
  ${tw`py-6 cursor-default`}
  padding-left: calc((120% - 100%) / 2);

  &:hover {
    ${tw`bg-gray-100`}
  }

  ${({ isActive }) => isActive && tw`bg-gray-100`}
`;

const Text = styled.span`
  ${tw``}
`;
const Arrow = styled.div<{ isActive: boolean }>`
  ${tw``}
  ${({ isActive }) => isActive && tw`mb-[4px]`}

  &::before {
    ${tw`border-l-2 border-b-2  border-black-lv1`}
    content: "";
    position: absolute;
    height: 9px;
    aspect-ratio: 1/1;

    transform: rotate(135deg);

    right: 20px;
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

interface ISelect {
  selected?: string;
  data: Array<IItemSelect>;
  onClick?: (id: string) => void;
}

const Select: FC<ISelect> = ({ selected, data, onClick }) => {
  const [isActive, setIsActive] = useToggleAndClose("select");
  const [isSelected, setIsSelected] = useState<IItemSelect | undefined>();
  const router = useRouter();

  useEffect(() => {
    const index = data?.findIndex(
      (value: IItemSelect) => value.id === selected || data[0].id
    );

    setIsSelected(data[index || 0]);
  }, []);

  const handleSelect = (value: IItemSelect) => {
    if (value?.query) {
      handleRouter(value);
    }
    setIsSelected(value);
    setIsActive(false);
  };

  const handleRouter = (value: IItemSelect) => {
    let url = new URL(location.origin + router.asPath);
    url.searchParams.delete("sort");
    let asPath = decodeURI(url.pathname + url.search);
    let query = url.search ? "&" : "?";
    query += value?.query;

    router.push(`${asPath}${query}`, undefined, {
      shallow: true,
    });
  };

  return (
    <SelectContainer>
      <SelectBox>
        <Selected data-element="select" onClick={setIsActive}>
          {isSelected ? (
            <Text data-element="select">{isSelected.name}</Text>
          ) : (
            <Skeleton />
          )}
          <Arrow data-element="select" isActive={isActive} />
        </Selected>
        <SelectList isActive={isActive}>
          {data &&
            data.map((value: IItemSelect) => (
              <SelectItem
                isActive={value.id === isSelected?.id}
                key={value.id}
                onClick={() => handleSelect(value)}
                id={value.id}
                data-element="select"
              >
                {value.name}
              </SelectItem>
            ))}
        </SelectList>
      </SelectBox>
    </SelectContainer>
  );
};

export default Select;
