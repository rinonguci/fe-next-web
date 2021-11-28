import Button from "@designs/Button";
import IconSVG from "@designs/IconSVG";
import SelectVariant from "@designs/SelectVariant";
import { ICart } from "@redux/types/user";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Select from "../Select";

const ItemContainer = styled.div`
  ${tw`py-8`}
`;
const ItemBox = styled.div`
  ${tw`flex gap-10`}
`;
const ImageBox = styled.div`
  ${tw`h-80 w-80 p-4 shadow rounded`}
`;
const ItemMain = styled.div`
  ${tw`flex-grow flex flex-col`}
`;
const Image = styled.img`
  ${tw`h-full w-full object-cover block`}
`;
const Design = styled.h3`
  ${tw`font-semibold text-base`}
`;
const IdProdcut = styled.p`
  ${tw` text-xs`}
`;
const Name = styled.p`
  ${tw`text-xs `}
`;
const Price = styled.p`
  ${tw`font-bold text-4xl text-gray-600 line-height[1]`}
`;
const InfoBox = styled.div`
  ${tw`flex justify-between items-center flex-grow`}
`;

const ControlBox = styled.div`
  ${tw`flex gap-6`}
`;
const ButtonContent = styled.div`
  ${tw`flex justify-center items-center gap-4`}
`;
const ButtonText = styled.span`
  ${tw`sm:hidden`}
`;
const ButtonWrraper = styled(Button)`
  ${tw``}

  &:hover * {
    color: white;
  }
`;

interface IItem {
  data: ICart;
}

const Item: FC<IItem> = ({ data }) => {
  return (
    <ItemContainer>
      <ItemBox>
        <ImageBox>
          <Image src={data.imageCovers[0]} />
        </ImageBox>
        <ItemMain>
          <Design>{data.name}</Design>
          <IdProdcut>
            Product number:{" "}
            {data.variants.sizeId ? data.variants.sizeId : "Default"}
          </IdProdcut>
          <Name>{data.name}</Name>
          <InfoBox>
            <Price>${data.price * data.quantity}</Price>
            <Select data={data} />
          </InfoBox>
          <ControlBox>
            <ButtonWrraper variant="outlined">
              <ButtonContent>
                <IconSVG iconHref="/icon.svg#svgs-bin" />
                <ButtonText>Remove</ButtonText>
              </ButtonContent>
            </ButtonWrraper>
            <ButtonWrraper variant="outlined" hoverColor="#00883d">
              <ButtonContent>
                <IconSVG iconHref="/icon.svg#svgs-wishlist" />
                <ButtonText>Add Wishlist</ButtonText>
              </ButtonContent>
            </ButtonWrraper>
          </ControlBox>
        </ItemMain>
      </ItemBox>
    </ItemContainer>
  );
};

export default Item;
