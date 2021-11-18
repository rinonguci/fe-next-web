import IconSVG from "@designs/IconSVG";
import { IProduct } from "@interfaces/product";
import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import Delayed from "@components/Delayed";
import { useAppDispatch } from "@hooks/redux";
import { addWishlist } from "@redux/slides/auth";
import { IAddWishListPayload } from "@interfaces/wishlist";
import Link from "@designs/Link";

const ProductCardContainer = styled.div`
  ${tw`flex flex-col gap-2 relative pt-10`}
  &:hover {
    filter: opacity(0.8);
  }
`;

const ImageBox = styled.div`
  ${tw``}

  &  span {
    ${tw`w-full aspect-ratio[1/1]`}
  }
`;

const Design = styled.div`
  ${tw`text-lg font-bold mt-2`}
`;

const Name = styled.h3`
  ${tw`text-base`}
`;

const Price = styled.span`
  ${tw`text-lg font-medium`}
`;

const HeartBox = styled.div<{ isCheck: boolean }>`
  ${tw`absolute right-0 top-[0px] cursor-pointer text-black hover:text-transparent`}
  ${({ isCheck }) =>
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

interface IProductCard {
  data: IProduct;
  isCheck?: boolean;
}

const ProductCard: FC<IProductCard> = ({ data, isCheck = false }) => {
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);

  useEffect(() => {
    setIsLike(isCheck);
  }, []);

  const handleLoadImage = () => {
    setCheck(true);
  };

  const handleAddWishlist = () => {
    setIsLike(!isLike);

    let payload: IAddWishListPayload = {
      product: data._id,
    };

    dispatch(addWishlist(payload));
  };

  return (
    <ProductCardContainer>
      <Link href={`/product/${data._id}/${data.slug}`}>
        <ImageBox>
          <LazyLoadImage
            afterLoad={handleLoadImage}
            src={data.imageCovers[0]}
            alt={data.name}
            placeholder={<Skeleton className="rounded" />}
          />
        </ImageBox>

        <Design>{check ? data.brand : <Skeleton />}</Design>
        <Name>{check ? data.name : <Skeleton />}</Name>
        <Price>{check ? `$ ${data.price}` : <Skeleton />}</Price>
      </Link>

      <HeartBox isCheck={isCheck} onClick={() => handleAddWishlist()}>
        <IconSVG iconHref="/icon.svg#svgs-wishlist" />
      </HeartBox>
    </ProductCardContainer>
  );
};

export default ProductCard;

/* <div >
        <strong>Available Sizes</strong>
        <table >
          <tbody>
            <tr>
              <td>
                <span>4 year</span>
                <span>5 year</span>
                <span>6 year</span>
                <span>7 year</span>
                <span>8 year</span>
                <span>9 year</span>
                <span>10 year</span>
              </td>
              <td>
                <span>11 year</span>
                <span>12 year</span>
                <span>13 year</span>
                <span>14 year</span>
                <span>15 year</span>
                <span>16 year</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */
