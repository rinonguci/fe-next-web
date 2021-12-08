import useToggleAndClose from "@hooks/useToggleAndClose";
import { IVariant } from "@redux/types/product";
import fetchProduct from "@services/products";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Skeleton from "react-loading-skeleton";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";

const SelectVariantContainer = styled.div`
  ${tw`w-full`}
`;

const SelectVariantBox = styled.div`
  ${tw`relative text-lg`}
`;
const SelectVariantedBox = styled.div`
  ${tw`px-6 py-4 border border-gray-300 rounded flex items-center justify-between`}
`;
const SelectVariantedText = styled.span`
  ${tw`text-gray-600 font-medium`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Arrow = styled.span`
  ${tw`border-l border-b  border-black-lv1`}

  height: 7px;
  aspect-ratio: 1/1;

  transform: rotate(-45deg);
`;

const SelectVariantListBox = styled.div<{ isActive: boolean }>`
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

const SelectVariantList = styled.div`
  ${tw``}
`;

const SelectVariantItem = styled.div`
  ${tw`px-4 py-4 hover:bg-gray-100 flex justify-between`}
`;

const ItemSize = styled.span`
  ${tw`text-sm text-gray-500 flex-shrink`}
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

interface ISelectVariant {
  list: Array<IVariant>;
  title?: string | null;

  setVariantId?: Dispatch<SetStateAction<string>>;
  setFuncSelect?: (func: () => void) => void;
  setVariant?: any;
}

const SelectVariant: FC<ISelectVariant> = ({
  list,
  title = "Select Size",
  setVariantId,
  setFuncSelect,
  setVariant,
}) => {
  const ref = useRef<any>(null);
  const [isActive, setIsActive] = useToggleAndCloseVer2(ref);
  const [variantList, setVariantList] = useState<IVariant[]>(list);
  const [variantSelected, setVariantSelected] = useState<IVariant>();

  useEffect(() => {
    setFuncSelect?.(() => {
      return handleClickSelect;
    });

    if (variantList && variantList.length === 1) {
      setVariantSelected({ ...variantList, size: "Default" });
      setVariantId?.(variantList[0].id!);
    }
  }, []);

  const handleClickSelect = () => {
    setIsActive();
  };

  const handleSelected = (value: IVariant) => {
    setVariant?.(value);
    setVariantSelected(value);
    setVariantId?.(value.id!);
    setIsActive();
  };

  const checkLengthOne = () => {
    return variantList && variantList?.length === 1;
  };

  return (
    <SelectVariantContainer>
      <TitleSmall>{title}</TitleSmall>
      <SelectVariantBox>
        <SelectVariantedBox onClick={() => handleClickSelect()}>
          <SelectVariantedText>
            {variantSelected ? variantSelected.size : "Select size"}
          </SelectVariantedText>
          {!checkLengthOne() && <Arrow />}
        </SelectVariantedBox>
        {isActive && !!!checkLengthOne() && (
          <SelectVariantListBox ref={ref} isActive={isActive}>
            <TitleBig onClick={setIsActive}>Select Size</TitleBig>
            <SelectVariantList>
              {variantList ? (
                variantList.map((value) => (
                  <SelectVariantItem
                    onClick={() => handleSelected(value)}
                    key={value.id}
                    data-element="select-pay"
                  >
                    <ItemSize>{value.size}</ItemSize>
                    <ItemPrice>${value.price}</ItemPrice>
                  </SelectVariantItem>
                ))
              ) : (
                <Skeleton className="mb-3" count={5} />
              )}
            </SelectVariantList>
          </SelectVariantListBox>
        )}
      </SelectVariantBox>
    </SelectVariantContainer>
  );
};

export default SelectVariant;
