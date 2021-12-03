import Link from "@designs/Link";
import { IDropdown } from "@redux/types/ui";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ItemContainer = styled.div`
  ${tw`w-full text-black-lv2 py-2`}
`;
const ItemBox = styled.div`
  ${tw`flex gap-6 items-center bg-white`}
`;
const ImageBox = styled.div`
  ${tw`h-28 w-28 p-2 rounded shadow-md`}
`;
const Image = styled.img`
  ${tw`h-full w-full block object-cover`}
`;
const ContentBox = styled.div`
  ${tw`flex-grow`}
  & p {
    line-height: 1.2;
  }
`;
const Design = styled.p`
  ${tw`text-base font-bold`}
`;
const Name = styled.p`
  ${tw`text-sm mb-1 font-medium`}

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Price = styled.p`
  ${tw`text-base font-bold`}
`;

interface IItem {
  data: IDropdown;
}

const Item: FC<IItem> = ({ data }) => {
  return (
    <ItemContainer>
      <Link href={`/product/${data.id}/${data.slug}`}>
        <ItemBox>
          <ImageBox>
            <Image src={data?.imageCovers?.[0]} />
          </ImageBox>
          <ContentBox>
            <Design>{data?.brand}</Design>
            <Name>{data?.name}</Name>
            <Price>${data?.price}</Price>
          </ContentBox>
        </ItemBox>
      </Link>
    </ItemContainer>
  );
};

export default Item;
