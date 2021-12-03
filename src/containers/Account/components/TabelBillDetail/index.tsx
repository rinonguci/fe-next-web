import { FC, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Item from "./components/Table";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getBill } from "@redux/slices/user";
import Table from "./components/Table";

const TableBillContainer = styled.div`
  ${tw`w-full text-center mt-10`}
`;
const Title = styled.span`
  ${tw`text-3xl font-semibold`}
`;
const TableContainer = styled.div`
  ${tw`mt-10`}
`;
interface ITableBill {}

const TableBill: FC<ITableBill> = () => {
  const dispatch = useAppDispatch();
  const { bill } = useAppSelector((state) => state.userReducers);

  useEffect(() => {
    dispatch(getBill());
  }, []);

  useEffect(() => {
    console.log(bill);
  }, [bill]);

  return (
    <TableBillContainer>
      <Title>My Order</Title>
      <TableContainer>
        <Table data={bill} />
      </TableContainer>
    </TableBillContainer>
  );
};

export default TableBill;
