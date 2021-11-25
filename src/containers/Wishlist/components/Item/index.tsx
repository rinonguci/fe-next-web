import Button from "@designs/Button";
import SelectVariant from "@designs/SelectVariant";
import { useAppDispatch } from "@hooks/redux";
import { addCart, addWishlist } from "@redux/slices/user";
import { IWish } from "@redux/types/user";
import fetchProduct from "@services/products";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ItemContainer = styled.div`
  ${tw``}
`;
const ItemBox = styled.div`
  ${tw`flex flex-col p-4 gap-y-2 items-center sm:border`}
`;
const ItemMain = styled.div`
  ${tw`sm:grid sm:grid-cols-3 sm:gap-x-8`}
`;
const InfoBox = styled.div`
  ${tw`sm:col-span-2 flex flex-col text-center sm:text-left`}
`;
const ImageBox = styled.div`
  ${tw`shadow p-4 border`}
`;
const Image = styled.img`
  ${tw`h-full w-full object-cover block`}
`;

const Design = styled.span`
  ${tw`font-bold text-lg mt-2`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Name = styled.span`
  ${tw`font-medium text-sm`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Price = styled.span`
  ${tw`font-medium text-lg flex-grow`}
`;

const ControlBox = styled.div`
  ${tw`w-full sm:flex sm:gap-4 sm:mt-4`}
`;
const ButtonDelete = styled(Button)`
  ${tw`hidden sm:block`}
`;

interface IItem {
  data: IWish;
}

const Item: FC<IItem> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [variantId, setVariantId] = useState<string>("");
  const [funcSelect, setFuncSelect] = useState<() => void>();

  function handleAddCart(): void {
    if (!variantId) {
      funcSelect?.();
      return;
    }

    addWishlistApi();
    addCartApi();
  }

  const addWishlistApi = () => {
    if (data._id) {
      let payload = {
        product: data._id,
      };

      dispatch(addWishlist(payload));
    }
  };

  const addCartApi = () => {
    dispatch(addCart({ productVariation: variantId, quantity: 1 }));
  };

  return (
    <ItemContainer>
      <ItemBox>
        <ItemMain>
          <ImageBox>
            <Image src={data?.imageCovers?.[0]} />
          </ImageBox>
          <InfoBox>
            <Design>{data?.brand}</Design>
            <Name>{data?.name}</Name>
            <Price>${data.price}</Price>
            <SelectVariant
              list={data.variants}
              setFuncSelect={setFuncSelect}
              setVariantId={setVariantId}
              productId={data.id}
              title={null}
            />
          </InfoBox>
        </ItemMain>

        <ControlBox>
          <ButtonDelete variant="outlined">Remove item</ButtonDelete>
          <Button onClick={() => handleAddCart()} variant="outlined">
            Add to cart
          </Button>
        </ControlBox>
      </ItemBox>
    </ItemContainer>
  );
};

export default Item;
