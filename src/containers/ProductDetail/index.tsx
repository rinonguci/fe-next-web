import Layout from "@components/Layout";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "./components/Image";

const ProductDetailContainer = styled.div`
  ${tw`container lg:max-w-full mx-auto xl:px-4 mt-20 px-20`}
`;
const ProductDetailBox = styled.div`
  ${tw`grid grid-cols-6 lg:block`}
`;

const ProductImageContainer = styled.div`
  ${tw`col-span-4 lg:w-[600px] md:w-full md:px-20 sm:px-4 px-10`}
`;

const ProductInfoContainer = styled.div`
  ${tw` `}
`;

const ProductInfoTopContainer = styled.div`
  ${tw` `}
`;

const ProductInfoBox = styled.div`
  ${tw``}
`;
const Design = styled.h3`
  ${tw``}
`;
const Name = styled.h3`
  ${tw``}
`;
const Price = styled.h3`
  ${tw``}
`;

const ProductPayBox = styled.div`
  ${tw``}
`;

const ProductPayControl = styled.div`
  ${tw``}
`;

const ProductInfoBottomContainer = styled.div`
  ${tw` `}
`;

interface IProductDetailPage {}

const ProductDetailPage: FC<IProductDetailPage> = () => {
  return (
    <Layout>
      <ProductDetailContainer>
        <ProductDetailBox>
          <ProductImageContainer>
            <Image />
          </ProductImageContainer>
          <ProductInfoContainer>
            <ProductInfoTopContainer>
              <ProductInfoBox>
                <Design>Foque</Design>
                <Name>Boys Ivory & Grey Shorts Set</Name>
                <Price>$82</Price>
              </ProductInfoBox>
            </ProductInfoTopContainer>
            <ProductInfoBottomContainer>
              <ProductPayBox>
                <ProductPayControl></ProductPayControl>
              </ProductPayBox>
            </ProductInfoBottomContainer>
          </ProductInfoContainer>
        </ProductDetailBox>
      </ProductDetailContainer>
    </Layout>
  );
};

export default ProductDetailPage;
