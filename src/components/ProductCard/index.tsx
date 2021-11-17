import IconSVG from "@designs/IconSVG";
import { IProduct } from "@interfaces/redux/product";
import { FC, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import Delayed from "@components/Delayed";

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

const HeartBox = styled.div`
  ${tw`absolute right-0 top-[0px]`}
`;

interface IProductCard {
  data: IProduct;
}

const ProductCard: FC<IProductCard> = ({ data }) => {
  const [check, setCheck] = useState<boolean>(false);

  const handleLoadImage = () => {
    setCheck(true);
  };

  return (
    <ProductCardContainer>
      <ImageBox>
        <LazyLoadImage
          afterLoad={handleLoadImage}
          effect="blur"
          src={data.imageCovers[0]}
          alt={data.name}
          placeholder={<Skeleton className="rounded" />}
          delayTime={10000}
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
      <Design>{check ? data.brand : <Skeleton />}</Design>
      <Name>{check ? data.name : <Skeleton />}</Name>
      <Price>{check ? `$ ${data.price}` : <Skeleton />}</Price>

      <HeartBox>
        <IconSVG iconHref="/icon.svg#svgs-wishlist" />
      </HeartBox>
    </ProductCardContainer>
  );
};

export default ProductCard;
