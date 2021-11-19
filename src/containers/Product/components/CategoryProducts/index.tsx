import ProductCard from "@components/ProductCard";
import { FC, useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "@hooks/redux";
import { IProduct } from "@redux/types/product";
import { IWish } from "@redux/types/user";

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
  const { wishList } = useAppSelector((state) => state.userReducers);

  const handleCheckIsLike = useCallback(
    (id: string) => {
      if (!(wishList && wishList.length > 0)) return;

      let index = wishList.findIndex((value: IWish) => value._id === id);

      if (index === -1) return false;
      return true;
    },
    [wishList]
  );

  return (
    <CategoryProductContainer>
      <CategoryProductList className={`gap-x-${gapX}`}>
        {products &&
          products.map((value) => (
            <CategoryProductItem key={value._id}>
              <ProductCard
                isCheck={handleCheckIsLike(value._id)}
                data={value}
              />
            </CategoryProductItem>
          ))}
      </CategoryProductList>
    </CategoryProductContainer>
  );
};

export default CategoryProduct;
