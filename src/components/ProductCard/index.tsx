import IconSVG from "@designs/IconSVG";
import { IProduct } from "@interfaces/redux/product";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCardContainer = styled.div`
  ${tw`flex flex-col gap-2 relative pt-10`}
`;

const ImageBox = styled.div`
  ${tw``}
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

const HeartBox = styled.div`
  ${tw`absolute right-0 top-[0px]`}
`;

interface IProductCard {
  data: IProduct;
}

const ProductCard: FC<IProductCard> = ({ data }) => {
  return (
    <ProductCardContainer>
      <ImageBox>
        <LazyLoadImage
          effect="opacity"
          src={data.imageCovers[0]}
          alt={data.name}
          placeholderSrc="https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"
        />
      </ImageBox>

      {/* <div >
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
      </div> */}
      <Design>{data.brand}</Design>
      <Name>{data.name}</Name>
      <Price> ${data.price} </Price>

      <HeartBox>
        <IconSVG iconHref="./icon.svg#svgs-wishlist" />
      </HeartBox>
    </ProductCardContainer>
  );
};

export default ProductCard;
