import Layout from "@components/Layout";
import Button from "@designs/Button";
import IconSVG from "@designs/IconSVG";
import SelectVariant from "@designs/SelectVariant";
import { useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "./components/Image";

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
  ${tw`col-span-2 px-20 py-20 xl:px-10 lg:px-20 sm:px-4 `}
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

const ProductInfoBottomContainer = styled.div`
  ${tw``}
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

const MoreProduct = styled.span`
  ${tw`pb-1 border-b border-black cursor-pointer`}
  max-width: max-content;
`;

interface IProductDetail {}

const ProductDetail: FC<IProductDetail> = () => {
  const { productDetail } = useAppSelector((state) => state.productReducers);

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
                <Price>${productDetail?.price}</Price>
              </ProductInfoBox>
              <ProductPayBox>
                <SelectVariant list={productDetail?.variants!} />
                <DeliveryLink>2-5 worrking days</DeliveryLink>
                <DeliveryLink>21 day to return</DeliveryLink>
                <ProductPayControl>
                  <ButtonWishList>
                    <IconSVG iconHref="/icon.svg#svgs-wishlist" />
                  </ButtonWishList>
                  <Button variant="container">Add to cart</Button>
                </ProductPayControl>
                <MoreProduct>More product infomation</MoreProduct>
              </ProductPayBox>
            </ProductInfoTopContainer>
            <ProductInfoBottomContainer></ProductInfoBottomContainer>
          </ProductInfoContainer>
        </ProductDetailBox>
      </ProductDetailContainer>
    </Layout>
  );
};

export default ProductDetail;
