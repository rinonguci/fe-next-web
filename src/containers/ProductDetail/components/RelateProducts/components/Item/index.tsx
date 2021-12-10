import { FC, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { IProduct } from "@redux/types/product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import Link from "@designs/Link";

const ItemContainer = styled.div`
  ${tw`px-8 `}
`;

const Name = styled.span`
  ${tw`text-center mt-4 text-base font-semibold `}

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Image = styled.div`
  ${tw``}
  width: 100%;
  aspect-ratio: 1/1;
`;
const LazyImage = styled(LazyLoadImage)`
  ${tw`h-full w-full`}
`;

interface IItem {
  data?: IProduct;
}

const Item: FC<IItem> = ({ data }) => {
  const [check, setCheck] = useState<boolean>(false);

  const handleLoadImage = () => {
    setCheck(true);
  };

  const handleSkeleton = (data?: string) => {
    return check ? data : <Skeleton />;
  };

  return (
    <ItemContainer>
      <Link href={`/product/${data?.id}/${data?.slug}`}>
        <Image>
          <LazyImage
            afterLoad={handleLoadImage}
            src={data?.imageCovers[0]}
            alt={data?.name}
            effect="opacity"
            delayTime={1000}
          />
          {!check && <Skeleton className="h-full w-full" />}
        </Image>
        <Name>{handleSkeleton(data?.name)}</Name>
        <div className="mt-2 text-center text-lg font-bold">
          <span className="regular-price">
            <span className="price">{handleSkeleton("$" + data?.price)}</span>
          </span>
        </div>
      </Link>
    </ItemContainer>
  );
};

export default Item;
