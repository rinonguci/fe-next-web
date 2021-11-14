import Filter from "@components/Filter";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import Breadcrumb from "@designs/Breadcrumb";
import { useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CategoryProduct from "./components/CategoryProducts";
import Toolbar from "./components/Toolbar";

const ProductContainer = styled.div`
  ${tw`container lg:max-w-full mx-auto px-20`}
`;

const ProductMain = styled.div`
  ${tw`grid grid-cols-4 gap-x-20 gap-y-4`}
`;

const FilterContainer = styled.div`
  ${tw`col-span-1`}
`;

const FilterBox = styled.div`
  ${tw``}
`;

const CategoryProductContainer = styled.div`
  ${tw`col-span-3`}
`;
const ToolbarContainer = styled.div`
  ${tw`col-span-4`}
`;

interface IProduct {}

const GAPCOMMON = 20;

const Product: FC<IProduct> = () => {
  const { products, facets } = useAppSelector((state) => state.productReducer);

  return (
    <Layout>
      <ProductContainer>
        <Breadcrumb titles={["Home", "Girl", "Tops"]} />
        <ProductMain>
          <ToolbarContainer>
            <Toolbar count={products ? products?.length : 0} gap={GAPCOMMON} />
          </ToolbarContainer>
          <FilterContainer>
            <FilterBox>
              {facets &&
                facets.map((value) => <Filter key={value.name} data={value} />)}
            </FilterBox>
          </FilterContainer>
          <CategoryProductContainer>
            <CategoryProduct gapX={GAPCOMMON} products={products} />
          </CategoryProductContainer>
        </ProductMain>
      </ProductContainer>
    </Layout>
  );
};

export default Product;
