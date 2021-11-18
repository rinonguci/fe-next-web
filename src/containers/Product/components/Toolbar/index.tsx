import Select from "@designs/Select";
import { IItemSelect } from "@interfaces/UI/IItemSelect";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Skeleton from "react-loading-skeleton";

const ToolbarContainer = styled.div`
  ${tw`grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-0`}
`;

const ButtonBox = styled.div`
  ${tw`col-span-1`}
`;
const CountBox = styled.div`
  ${tw`col-span-3 lg:col-span-2 md:col-span-1 flex justify-center items-center`}
`;
const Count = styled.span`
  ${tw`uppercase text-xl  font-medium`}
`;

interface IToolbar {
  gap: number;
  count: number;
}

const dataFilter: Array<IItemSelect> = [
  {
    id: "newest-arrivals",
    name: "Newest Arrivals",
    query: "sort=createat",
  },
  {
    id: "price-high-low",
    name: "Price High Low",
    query: "sort=-price",
  },
  {
    id: "price-low-high",
    name: "Price Low High",
    query: "sort=price",
  },
];

const Toolbar: FC<IToolbar> = ({ gap, count }) => {
  const router = useRouter();
  const [dataSelect, setDataSelect] = useState<Array<IItemSelect>>(dataFilter);
  const { asPath } = router;

  useEffect(() => {
    handleDataSelect();
  }, []);

  const handleQueryString = (query: string) => {
    if (asPath.indexOf("?") === -1) return "?" + query;
    return "&" + query;
  };

  const handleDataSelect = () => {
    setDataSelect(
      [...dataSelect].map((value) => ({
        ...value,
        query: handleQueryString(value?.query),
      }))
    );
  };

  return (
    <ToolbarContainer className={`gap-${gap}`}>
      <ButtonBox>
        <Select data={dataFilter} />
      </ButtonBox>
      <CountBox>
        <Count>{count ? `${count} Items` : <Skeleton />} </Count>
      </CountBox>
    </ToolbarContainer>
  );
};

export default Toolbar;
