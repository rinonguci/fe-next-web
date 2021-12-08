import { FC } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { IVariant } from "@redux/types/product";

const VariantContainer = styled.div`
  ${tw`text-center border border-gray-300 min-w-[160px]`}
  background-color: #fcfcfc;
`;
const Title = styled.strong`
  ${tw`block my-2`}
`;
const Table = styled.table`
  ${tw`w-full`}
`;
const TBody = styled.tbody`
  ${tw``}
`;

const TD = styled.td<{ oneItem: boolean }>`
  ${tw`py-2  w-[80px] border-t border-b  border-gray-300`}

  ${({ oneItem }) =>
    oneItem ? tw`last:border-l first:border-l-0` : tw`first:border-r`}
`;
const TR = styled.tr`
  ${tw``}

  &:last-child ${TD} {
    border-bottom: none;
  }
`;

interface IVariantProps {
  data: Array<IVariant[]> | undefined;
  length: number;
}

const Variant: FC<IVariantProps> = ({ data, length }) => {
  return (
    <VariantContainer>
      <Title>Available Sizes</Title>
      <Table>
        <TBody>
          {data &&
            data.map((value, index) => (
              <TR key={index}>
                {value.map((item) => (
                  <TD key={item.id} oneItem={length === 1}>
                    {item.size || "Default"}
                  </TD>
                ))}
              </TR>
            ))}
        </TBody>
      </Table>
    </VariantContainer>
  );
};

export default Variant;
