import Layout from "@components/Layout";
import Button from "@designs/Button";
import IconSVG from "@designs/IconSVG";
import SelectVariant from "@designs/SelectVariant";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { addCart, addWishlist } from "@redux/slices/user";
import { IVariant } from "@redux/types/product";
import { IWish } from "@redux/types/user";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Image from "./components/Image";
import RelateProducts from "./components/RelateProducts";

const ProductDetailContainer = styled.div`
  ${tw`container lg:max-w-full mx-auto xl:px-4  mt-40 px-40`}
`;
const ProductDetailBox = styled.div`
  ${tw`grid grid-cols-6 lg:block`}
`;

const ProductImageContainer = styled.div`
  ${tw`col-span-4 lg:w-[600px] lg:mx-auto md:w-full  md:px-20 sm:px-4 px-10`}
`;

const ProductInfoContainer = styled.div`
  ${tw`col-span-2 px-20 xl:px-10 lg:px-20 sm:px-4 `}
`;

const ProductInfoTopContainer = styled.div`
  ${tw` `}
`;

const ProductInfoBox = styled.div`
  ${tw`grid gap-3`}
`;
const Design = styled.h3`
  ${tw`font-medium text-3xl`}
`;
const Name = styled.h3`
  ${tw`font-light text-lg`}
`;
const Price = styled.h3`
  ${tw`text-xl font-medium`}
`;

const ProductPayBox = styled.div`
  ${tw`grid gap-6`}
`;

const DeliveryLink = styled.span`
  ${tw`block text-sm underline text-black-lv3`}
`;

const ProductPayControl = styled.div`
  ${tw`flex justify-between gap-x-10 gap-y-1`}
`;

const ButtonWishList = styled.button`
  ${tw`h-20 w-20 flex-shrink-0 flex justify-center items-center rounded border border-black`}
`;

const MoreProduct = styled.span<{ isActive: boolean }>`
  ${tw`block relative font-semibold text-gray-600 pt-4 text-base border-t border-gray-300 cursor-pointer`}

  ${({ isActive }) =>
    !isActive &&
    css`
      &:before {
        ${tw`bg-gray-400 absolute`}
        content: "";
        height: 16px;
        width: 2px;
        height: 50%;
        right: 10px;
        transform: translateY(50%);
      }
    `}
  
  &:after {
    ${tw`bg-gray-400 absolute`}
    content: "";
    height: 16px;
    width: 2px;
    height: 50%;
    right: 10px;
    transform: translateY(50%) rotate(90deg);
  }
`;
const Desc = styled.p`
  ${tw``}
`;
const RelateProductsBox = styled.div`
  ${tw`mt-32`}
`;
const Title = styled.p`
  ${tw`text-2xl text-gray-600 font-bold mb-10`}
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

interface IProductDetail {}

const ProductDetail: FC<IProductDetail> = () => {
  const dispatch = useAppDispatch();
  const { productDetail } = useAppSelector((state) => state.productReducers);
  const { wishlist } = useAppSelector((state) => state.userReducers);

  const [isLike, setIsLike] = useState<boolean>();
  const [variantId, setVariantId] = useState<string>("");
  const [variant, setVariant] = useState<IVariant>();
  const [funcSelect, setFuncSelect] = useState<() => void>();
  const [isDesp, setIsDesp] = useState<boolean>(false);
  const [isDespLong, setIsDespLong] = useState<boolean>(false);

  useEffect(() => {
    let checkIsLike = handleCheckIsLike(productDetail?.id!);
    setIsLike(checkIsLike);
  }, [productDetail]);

  const handleAddWishlist = () => {
    setIsLike(!isLike);

    addWishlistApi();
  };

  const addWishlistApi = () => {
    let payload = {
      product: productDetail.id!,
    };
    dispatch(addWishlist(payload));
  };

  function handleAddCart(): void {
    if (!variantId) {
      funcSelect?.();
      return;
    }

    addCartApi();
  }

  const addCartApi = () => {
    dispatch(addCart({ productVariation: variantId, quantity: 1 }));
  };

  const handleCheckIsLike = useCallback(
    (id: string) => {
      if (!(wishlist && wishlist.length > 0)) return;

      let index = wishlist.findIndex((value: IWish) => value.id === id);

      if (index === -1) return false;
      return true;
    },
    [wishlist]
  );

  return (
    <Layout>
      <ProductDetailContainer>
        <ProductDetailBox>
          <ProductImageContainer>
            <Image
              images={productDetail?.images!}
              imageCover={productDetail?.imageCovers!}
              name={productDetail?.name!}
            />
          </ProductImageContainer>
          <ProductInfoContainer>
            <ProductInfoTopContainer>
              <ProductInfoBox>
                <Design>{productDetail?.brand}</Design>
                <Name>{productDetail?.name}</Name>
                <Price>${variant ? variant.price : productDetail?.price}</Price>
              </ProductInfoBox>
              <ProductPayBox>
                <SelectVariant
                  setVariant={setVariant}
                  setFuncSelect={setFuncSelect}
                  setVariantId={setVariantId}
                  list={productDetail?.variants!}
                />
                <DeliveryLink>2-5 worrking days</DeliveryLink>
                <DeliveryLink>21 day to return</DeliveryLink>
                <ProductPayControl>
                  <ButtonWishList>
                    <HeartBox isCheck={isLike} onClick={handleAddWishlist}>
                      <IconSVG iconHref="/icon.svg#svgs-wishlist" />
                    </HeartBox>
                  </ButtonWishList>
                  <Button onClick={() => handleAddCart()} variant="container">
                    Add to cart
                  </Button>
                </ProductPayControl>

                <MoreProduct
                  onClick={() => {
                    setIsDesp(!isDesp);
                  }}
                  isActive={isDesp}
                >
                  Detail
                </MoreProduct>
                {isDesp && <Desc>{productDetail.shortDescription}</Desc>}

                <MoreProduct
                  onClick={() => {
                    setIsDespLong(!isDespLong);
                  }}
                  isActive={isDespLong}
                >
                  Composition
                </MoreProduct>

                {isDespLong && <Desc>{productDetail.longDescription}</Desc>}
              </ProductPayBox>
            </ProductInfoTopContainer>
          </ProductInfoContainer>
        </ProductDetailBox>
        <RelateProductsBox>
          <Title>Related products</Title>
          <RelateProducts data={productDetail.relateProducts} />
        </RelateProductsBox>
      </ProductDetailContainer>
    </Layout>
  );
};

export default ProductDetail;
