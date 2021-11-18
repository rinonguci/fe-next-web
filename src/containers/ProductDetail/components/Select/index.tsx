import useToggleAndClose from "@hooks/useToggleAndClose";
import { IVariant } from "@interfaces/product";
import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const SelectContainer = styled.div`
  ${tw`w-[245px]`}
`;

const SelectBox = styled.div`
  ${tw`relative text-lg`}
`;
const SelectedBox = styled.div`
  ${tw`px-6 py-4 border border-gray-300 rounded flex items-center justify-between`}
`;
const SelectedText = styled.span`
  ${tw`text-gray-600 font-medium`}
`;

const Arrow = styled.span`
  ${tw`border-l border-b  border-black-lv1`}

  height: 7px;
  aspect-ratio: 1/1;

  transform: rotate(-45deg);
`;

const SelectListBox = styled.div<{ isActive: boolean }>`
  ${tw`absolute top-0 w-full bg-white border border-gray-300 rounded transition-opacity h-[200px] overflow-y-scroll`};

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SelectList = styled.div`
  ${tw``}
`;

const SelectItem = styled.div`
  ${tw`px-4 py-4 hover:bg-gray-100 flex justify-between`}
`;

const ItemSize = styled.span`
  ${tw`text-sm text-gray-500`}
`;

const ItemPrice = styled.span`
  ${tw`text-sm text-gray-600 font-medium`}
`;

const TitleSmall = styled.div`
  ${tw`text-sm font-medium text-black-lv2 py-2`}
`;

const TitleBig = styled.div`
  ${tw`px-4 pt-4 pb-2 font-medium`}
`;

interface ISelect {
  list?: Array<IVariant>;
}

const Select: FC<ISelect> = ({ list }) => {
  const [isActive, setIsActive] = useToggleAndClose("select-pay");
  const [state, setstate] = useState();
  useEffect(() => {}, []);

  return (
    <SelectContainer>
      <TitleSmall>Select Size</TitleSmall>
      <SelectBox>
        <SelectedBox onClick={setIsActive}>
          <SelectedText>Con gà con</SelectedText>
          <Arrow />
        </SelectedBox>
        {isActive && (
          <SelectListBox isActive={isActive}>
            <TitleBig onClick={setIsActive}>Select Size</TitleBig>
            <SelectList>
              {list &&
                list.map((value) => (
                  <SelectItem data-element="select-pay">
                    <ItemSize>{value.size}</ItemSize>
                    <ItemPrice>${value.price}</ItemPrice>
                  </SelectItem>
                ))}
            </SelectList>
          </SelectListBox>
        )}
      </SelectBox>
    </SelectContainer>
  );
};

export default Select;
