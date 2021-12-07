import IconSVG from "@designs/IconSVG";
import { createRef, FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { useAppDispatch } from "@hooks/redux";
import { addWishlist } from "@redux/slices/user";
import Link from "@designs/Link";
import { IProduct, IVariant } from "@redux/types/product";
import Variant from "./components/Variant";
import handleChunkArray from "@common/function/handleChunkArray";

const ProductCardContainer = styled.div<{ isIndex: boolean }>`
  ${tw`flex flex-col gap-2 relative pt-10`}
  ${({ isIndex }) => isIndex && tw`z-10`}
`;

const ImageBox = styled.div`
  ${tw`relative`}

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
const VariantBox = styled.div`
  ${tw`absolute  z-[9999] pointer-events[none]`}
  width: max-content;
`;

interface IProductCard {
  data: IProduct;
  isCheck?: boolean;
}

const ProductCard: FC<IProductCard> = ({ data, isCheck = false }) => {
  const dispatch = useAppDispatch();
  const [sizeList, setSizeList] = useState<IVariant[][]>();
  const [check, setCheck] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>();

  const [isActive, setIsActive] = useState<boolean>(false);
  const refImage = useRef<HTMLDivElement>(null);
  const refVariant = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLike(isCheck);

    handleSizeList();
  }, []);

  useEffect(() => {
    if (refImage.current === null) {
      return;
    }

    const handleHover = (ev: any) => {
      var evTarget = ev.target;

      var rect = evTarget?.getBoundingClientRect();
      var x = ev.clientX - rect.left; //x position within the element.
      var y = ev.clientY - rect.top; //y position within the element.

      if (!refVariant.current) return;

      if (ev.clientX + 142 > rect.right) {
        refVariant.current.setAttribute(
          "style",
          `left: ${x - 5 - 142}px; top: ${y + 10}px`
        );
      } else {
        refVariant.current.setAttribute(
          "style",
          `left: ${x + 10}px; top: ${y + 10}px`
        );
      }
    };

    refImage.current.addEventListener("mousemove", handleHover);

    return () => {
      if (refImage.current === null) {
        return;
      }

      refImage.current.removeEventListener("mousemove", handleHover);
    };
  }, []);

  useEffect(() => {
    if (refImage.current === null) {
      return;
    }

    const isOpen = (ev: any) => {
      setIsActive(true);
    };

    const isClose = (ev: any) => {
      setIsActive(false);
    };

    refImage.current.addEventListener("mouseenter", isOpen);
    refImage.current.addEventListener("mouseleave", isClose);

    return () => {
      if (refImage.current === null) {
        return;
      }

      refImage.current.removeEventListener("mouseenter", isOpen);
      refImage.current.removeEventListener("mouseleave", isClose);
    };
  }, []);

  const handleLoadImage = () => {
    setCheck(true);
  };

  const handleSizeList = () => {
    let chunkArray = handleChunkArray<IVariant>(data.variants, 2);

    setSizeList(chunkArray);
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
    <ProductCardContainer isIndex={isActive}>
      <Link href={`/product/${data._id}/${data.slug}`}>
        <ImageBox ref={refImage}>
          <LazyLoadImage
            afterLoad={handleLoadImage}
            src={data.imageCovers[0]}
            alt={data.name}
            effect="opacity"
            delayTime={1000}
            placeholder={<Skeleton className="rounded" />}
          />

          {isActive && (
            <VariantBox ref={refVariant}>
              <Variant length={data.variants.length} data={sizeList} />
            </VariantBox>
          )}
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
