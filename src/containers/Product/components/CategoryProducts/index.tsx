import ProductCard from "@components/ProductCard";
import Link from "@designs/Link";
import { IProduct } from "@interfaces/redux/product";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Skeleton from "react-loading-skeleton";
import Delayed from "@components/Delayed";

const CategoryProductContainer = styled.div`
  ${tw``}
`;

const CategoryProductList = styled.ul`
  ${tw`grid grid-cols-3 md:grid-cols-2 gap-y-8`}
`;
const CategoryProductItem = styled.li`
  ${tw`text-center`}
`;

const NotFound = styled.div`
  ${tw`text-center`}
`;
const NotFoundMessage = styled.h3`
  ${tw`text-4xl`}
`;
interface ICategoryProduct {
  products?: Array<IProduct>;
  gapX: number;
}

const CategoryProduct: FC<ICategoryProduct> = ({ products, gapX }) => {
  return (
    <CategoryProductContainer>
      <CategoryProductList className={`gap-x-${gapX}`}>
        {products &&
          products.map((value) => (
            <CategoryProductItem key={value._id}>
              <Link href={`/product/${value._id}/${value.slug}`}>
                <ProductCard data={value} />
              </Link>
            </CategoryProductItem>
          ))}
      </CategoryProductList>
    </CategoryProductContainer>
  );
};

export default CategoryProduct;
