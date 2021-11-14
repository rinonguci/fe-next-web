import Select from "@designs/Select";
import { IItemSelect } from "@interfaces/UI/IItemSelect";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ToolbarContainer = styled.div`
  ${tw`grid grid-cols-4`}
`;

const ButtonBox = styled.div`
  ${tw`col-span-1`}
`;
const CountBox = styled.div`
  ${tw`col-span-3 text-center relative`}
`;
const Count = styled.span`
  ${tw`uppercase text-xl font-medium absolute transform translate-y-[-50%] top-1/2`}
`;

interface IToolbar {
  gap: number;
  count: number;
}

const dataFilter: Array<IItemSelect> = [
  {
    id: "most-popular",
    name: "Most Popular",
  },
  {
    id: "price-high-low",
    name: "Price High Low",
  },
  {
    id: "price-low-high",
    name: "Price Low High",
  },
  {
    id: "newest-arrivals",
    name: "Newest Arrivals",
  },
];

const Toolbar: FC<IToolbar> = ({ gap, count }) => {
  return (
    <ToolbarContainer className={`gap-${gap}`}>
      <ButtonBox>
        <Select data={dataFilter} />
      </ButtonBox>
      <CountBox>
        <Count>{count} Items</Count>
      </CountBox>
    </ToolbarContainer>
  );
};

export default Toolbar;
