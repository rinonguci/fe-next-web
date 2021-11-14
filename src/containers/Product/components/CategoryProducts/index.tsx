import ProductCard from "@components/ProductCard";
import { IProduct } from "@interfaces/redux/product";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CategoryProductContainer = styled.div`
  ${tw``}
`;

const CategoryProductList = styled.ul`
  ${tw`grid grid-cols-3 gap-y-8`}
`;
const CategoryProductItem = styled.li`
  ${tw`text-center`}
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
              <ProductCard data={value} />
            </CategoryProductItem>
          ))}
        {!products && <h3>Không có sản phẩm</h3>}
      </CategoryProductList>
    </CategoryProductContainer>
  );
};

export default CategoryProduct;
