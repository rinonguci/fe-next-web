import Filter from "@components/Filter";
import useWindowSize from "@hooks/useWindowSize";
import { IFacet } from "@redux/types/product";
import { FC, Fragment, memo } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ToolbarMobileContainer = styled.div`
  ${tw`hidden lg:block`}
`;
const ToolbarMobileBox = styled.div`
  ${tw`w-full mx-auto relative `}
`;

const ItemContainer = styled.div<{ isActive: boolean }>`
  ${tw`grid  bg-white`}
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const ItemContainerBottom = styled.div<{ isActive: boolean }>`
  ${tw`fixed right-0 left-0 bottom-0 z-30 bg-green-500 rounded`}
  ${({ isActive }) => (isActive ? tw`block` : tw`hidden`)}
`;

const ItemBox = styled.div`
  ${tw`text-lg font-medium text-center border border-black-lv3 py-6`}
`;
const ItemText = styled.span`
  ${tw`text-black-lv2`}
`;

const ItemBoxBottom = styled.div`
  ${tw`text-lg font-medium text-center py-6`}
`;
const ItemTextBottom = styled.span`
  ${tw`text-white`}
`;
const ItemIcon = styled.i`
  ${tw``}
`;
const CountBox = styled.div`
  ${tw``}
`;

const FilterContainer = styled.div<{ isActive: boolean }>`
  ${tw`relative mt-2`}
  ${({ isActive }) => (isActive ? tw`block` : tw`hidden`)}
`;

const FilterBox = styled.div`
  ${tw`z-10 bg-white pb-10`}
`;

interface IToolbarMobile {
  facets?: Array<IFacet>;
  onClick: () => void;
  isActive: boolean;
}

const ToolbarMobile: FC<IToolbarMobile> = ({ isActive, facets, onClick }) => {
  const { width } = useWindowSize();

  return (
    <Fragment>
      {width && width < 767 && (
        <ToolbarMobileContainer>
          <ToolbarMobileBox>
            <ItemContainer isActive={isActive}>
              <ItemBox onClick={onClick}>
                <ItemText>Filter</ItemText>
                <ItemIcon />
              </ItemBox>
              {/* <ItemBox onClick={onClick}>
                <ItemText>Price low - hight</ItemText>
                <ItemIcon />
              </ItemBox> */}
            </ItemContainer>

            <FilterContainer isActive={isActive}>
              <FilterBox>
                {facets &&
                  facets.map((value: IFacet) => (
                    <Filter key={value.name} data={value} />
                  ))}
              </FilterBox>
            </FilterContainer>
          </ToolbarMobileBox>
          <ItemContainerBottom isActive={isActive}>
            <ItemBoxBottom onClick={onClick}>
              <ItemTextBottom>Filter</ItemTextBottom>
              <ItemIcon />
            </ItemBoxBottom>
          </ItemContainerBottom>
        </ToolbarMobileContainer>
      )}
    </Fragment>
  );
};

export default ToolbarMobile;
