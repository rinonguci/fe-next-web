import { FC, Fragment, useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { IBill, IBillList } from "@redux/types/user";
import moment from "moment";
import { PopupContext } from "@components/Layout";

const TableContainer = styled.table`
  ${tw`w-full bg-white text-center`}
`;

const Header = styled.tr`
  ${tw``}
`;
const HedaerItem = styled.th`
  ${tw`py-4 px-4 border border-gray-400 bg-green-400 text-white font-semibold text-sm`}
`;

const Tr = styled.tr`
  ${tw``}
`;

const Td = styled.td`
  ${tw`py-4 px-4 border border-gray-400 `}
`;

interface IItem {
  data: IBillList;
}

const Table: FC<IItem> = ({ data }) => {
  const { setElement } = useContext(PopupContext);

  let handleClickPopup = (data: IBill) => {
    setElement?.(tableDetail(data));
  };

  let tableDetail = (data: IBill) => {
    let _data = data.items;
    return (
      <TableContainer>
        <Header>
          <HedaerItem>Name</HedaerItem>
          <HedaerItem>Quantity</HedaerItem>
          <HedaerItem>Price</HedaerItem>
          <HedaerItem>Total</HedaerItem>
        </Header>
        {_data.map((value) => {
          return (
            <Tr key={value._id}>
              <Td>{value.name}</Td>
              <Td>{value.quantity}</Td>
              <Td>{value.price}</Td>
              <Td>{value.total}</Td>
            </Tr>
          );
        })}
      </TableContainer>
    );
  };

  return (
    <TableContainer>
      <Header>
        <HedaerItem>ID</HedaerItem>
        <HedaerItem>Amout</HedaerItem>
        <HedaerItem>Quantity</HedaerItem>
        <HedaerItem>Create At</HedaerItem>
        <HedaerItem>Action</HedaerItem>
      </Header>
      {data.map((value) => {
        let date = moment(Date.parse(value.createAt + "")).format(
          "MMMM Do YYYY, h:mm:ss a"
        );

        return (
          <Tr key={value._id}>
            <Td>{value._id}</Td>
            <Td>{value.amount}</Td>
            <Td>{value.quantity}</Td>
            <Td>{date}</Td>
            <Td
              className="font-semibold"
              onClick={() => handleClickPopup(value)}
            >
              Detail
            </Td>
          </Tr>
        );
      })}
    </TableContainer>
  );
};

export default Table;
