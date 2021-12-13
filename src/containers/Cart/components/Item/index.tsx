import isNullObject from "@common/function/isNullObject";
import Button from "@designs/Button";
import IconSVG from "@designs/IconSVG";
import SelectVariant from "@designs/SelectVariant";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { addWishlist, deleteCart } from "@redux/slices/user";
import { ICart, IWish } from "@redux/types/user";
import { FC, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
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
const HeartBox = styled.div<{ isCheck?: boolean }>`
  ${({ isCheck = false }) =>
    isCheck &&
    css`
      color: transparent !important;
      use {
        fill: #ff3f3f !important;
      }
    `}
  &:hover {
    color: transparent !important;
    use {
      fill: #ff8484;
    }
  }
`;

interface IItem {
  data: ICart;
}

const Item: FC<IItem> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [isLike, setIsLike] = useState<boolean>(false);
  const { wishlist } = useAppSelector((state) => state.userReducers);
  const { user } = useAppSelector((state) => state.userReducers);

  useEffect(() => {
    handleCheck();
  }, [wishlist]);

  const handleCheck = () => {
    let checkIsLike = handleCheckIsLike(data?.idProduct!);

    setIsLike(checkIsLike);
  };

  const handleAddWishlist = () => {
    if (!isNullObject(user)) {
      setIsLike(!isLike);
    }

    addWishlistApi();
  };

  const addWishlistApi = () => {
    let payload = {
      product: data.idProduct!,
    };
    dispatch(addWishlist(payload));
  };

  const handleDelete = () => {
    callDeleteApi(data.id);
  };

  const callDeleteApi = (id: string) => {
    dispatch(deleteCart({ id: id }));
  };

  const handleCheckIsLike = (id: string) => {
    if (!(wishlist && wishlist.length > 0)) return false;

    let index = wishlist.findIndex((value: IWish) => value.id === id);

    if (index === -1) return false;
    return true;
  };

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
            <ButtonWrraper variant="outlined" onClick={() => handleDelete()}>
              <ButtonContent>
                <IconSVG iconHref="/icon.svg#svgs-bin" />
                <ButtonText>Remove</ButtonText>
              </ButtonContent>
            </ButtonWrraper>
            <ButtonWrraper variant="outlined" hoverColor="#00883d">
              <ButtonContent onClick={handleAddWishlist}>
                <HeartBox isCheck={isLike}>
                  <IconSVG iconHref="/icon.svg#svgs-wishlist" />
                </HeartBox>
                <ButtonText>{isLike ? "Remove" : "Add"} Wishlist</ButtonText>
              </ButtonContent>
            </ButtonWrraper>
          </ControlBox>
        </ItemMain>
      </ItemBox>
    </ItemContainer>
  );
};

export default Item;
