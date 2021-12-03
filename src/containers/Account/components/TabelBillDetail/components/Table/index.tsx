import { FC, Fragment } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { IBillList } from "@redux/types/user";
import moment from "moment";

const TableContainer = styled.table`
  ${tw`w-full`}
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
  return (
    <TableContainer>
      <Header>
        <HedaerItem>ID1</HedaerItem>
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
          <Tr>
            <Td>{value._id}</Td>
            <Td>{value.amount}</Td>
            <Td>{value.quantity}</Td>
            <Td>{date}</Td>
            <Td className="font-semibold">Detail</Td>
          </Tr>
        );
      })}
    </TableContainer>
  );
};

export default Table;
