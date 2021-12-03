import IconSVG from "@designs/IconSVG";
import { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { useAppDispatch } from "@hooks/redux";
import { addWishlist } from "@redux/slices/user";
import Link from "@designs/Link";
import { IProduct } from "@redux/types/product";

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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Name = styled.h3`
  ${tw`text-base`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  ${tw`text-lg font-medium`}
`;

const HeartBox = styled.div<{ isCheck?: boolean }>`
  ${tw`absolute right-0 top-[0px] text-black hover:text-transparent`}
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

interface IProductCard {
  data: IProduct;
  isCheck?: boolean;
}

const ProductCard: FC<IProductCard> = ({ data, isCheck = false }) => {
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>();

  useEffect(() => {
    setIsLike(isCheck);
  }, []);

  const handleLoadImage = () => {
    setCheck(true);
  };

  const handleAddWishlist = () => {
    setIsLike(!isLike);

    addWishlistApi();
  };

  const addWishlistApi = () => {
    let payload = {
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
            effect="opacity"
            delayTime={1000}
            placeholder={<Skeleton className="rounded" />}
          />
        </ImageBox>

        <Design>{check ? data.brand : <Skeleton />}</Design>
        <Name>{check ? data.name : <Skeleton />}</Name>
        <Price>{check ? `$ ${data.price}` : <Skeleton />}</Price>
      </Link>

      <HeartBox isCheck={isLike} onClick={handleAddWishlist}>
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
