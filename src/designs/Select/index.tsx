import useToggleAndClose from "@hooks/useToggleAndClose";
import { IItemSelect } from "@interfaces/UI/IItemSelect";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SelectContainer = styled.div`
  ${tw`relative text-lg bg-white z-20 max-w-[260px]`}
`;
const Selected = styled.div`
  ${tw`px-6 py-6 relative block cursor-default`}

  &::before {
    ${tw`border-b-2 border-r-2 border-black-lv1`}
    content: "";
    position: absolute;
    height: 9px;
    aspect-ratio: 1/1;

    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    right: 20px;
  }
`;
const SelectList = styled.ul<{ isActive: boolean }>`
  ${tw`absolute transition-opacity invisible opacity-0 w-[110%] bg-white`}
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

interface ISelect {
  selected?: string;
  data: Array<IItemSelect>;
  onClick?: (id: string) => void;
}

const Select: FC<ISelect> = ({ selected, data, onClick }) => {
  const [isActive, setIsActive] = useToggleAndClose("select");
  const [isSelected, setIsSelected] = useState<IItemSelect | undefined>();

  useEffect(() => {
    const index = data?.findIndex(
      (value: IItemSelect) => value.id === selected || data[0].id
    );

    setIsSelected(data[index || 0]);
  }, []);

  const handleSelect = (value: IItemSelect) => {
    setIsSelected(value);
    setIsActive(false);
  };

  return (
    <SelectContainer>
      <Selected onClick={setIsActive} data-element="select">
        {isSelected && isSelected.name}
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
    </SelectContainer>
  );
};

export default Select;
