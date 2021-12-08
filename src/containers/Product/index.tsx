import Filter from "@components/Filter";
import Layout from "@components/Layout";
import Breadcrumb from "@components/Breadcrumb";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getProductsByType } from "@redux/slices/product";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CategoryProduct from "./components/CategoryProducts";
import Toolbar from "./components/Toolbar";
import ToolbarMobile from "./components/ToolbarMobile";
import { IFacet, IGetProductsByTypePayload } from "@redux/types/product";

const ProductContainer = styled.div<{ isActive: boolean }>`
  ${tw`container lg:max-w-full mx-auto xl:px-4 lg:mt-10 px-20 `}
  ${({ isActive }) => (isActive ? tw`hidden` : tw`block`)}
`;

const ProductMain = styled.div`
  ${tw`grid lg:grid-cols-3 grid-cols-4 gap-x-20 lg:gap-x-0 gap-y-4`}
`;

const FilterContainer = styled.div`
  ${tw`col-span-1 lg:hidden`}
`;

const FilterBox = styled.div`
  ${tw`lg:max-w-full max-w-[260px]`}
`;

const CategoryProductContainer = styled.div`
  ${tw`col-span-3`}
`;
const ToolbarContainer = styled.div`
  ${tw`col-span-4 lg:hidden`}
`;
const NotFound = styled.div`
  ${tw`text-center mt-20`}
`;
const NotFoundMessage = styled.h3`
  ${tw`text-4xl`}
`;

const ProductMobileContainer = styled.div`
  ${tw`container lg:max-w-full mx-auto xl:px-4 px-20 `}
`;

interface IProduct {}

const GAPCOMMON = 20;

const Product: FC<IProduct> = () => {
  const dispatch = useAppDispatch();
  const {
    query: { slug },
  } = useRouter();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [isActive, setActive] = useState<boolean>(false);

  const { productsByType, facets } = useAppSelector(
    (state) => state.productReducers
  );

  useEffect(() => {
    let url = new URL(location.origin + router.asPath);
    let p = url.search.substring(1); //remove "?"

    setQuery(p);
  }, [router.asPath]);

  useEffect(() => {
    if (!slug?.[0]) return;

    let payload: IGetProductsByTypePayload = { id: slug[0] };

    payload.params = query ? query : undefined;
    console.log(query);

    dispatch(getProductsByType(payload));
  }, [query]);

  const handleActive = () => {
    setActive(!isActive);
  };

  return (
    <Layout>
      <ProductMobileContainer>
        <Breadcrumb />
        <ToolbarMobile
          isActive={isActive}
          onClick={handleActive}
          facets={facets}
        />
      </ProductMobileContainer>

      <ProductContainer isActive={isActive}>
        <ProductMain>
          <ToolbarContainer>
            <Toolbar
              count={productsByType ? productsByType?.length : 0}
              gap={GAPCOMMON}
            />
          </ToolbarContainer>
          <FilterContainer>
            <FilterBox>
              {facets &&
                facets.map((value: IFacet) => (
                  <Filter key={value.name} data={value} />
                ))}
            </FilterBox>
          </FilterContainer>
          <CategoryProductContainer>
            <CategoryProduct gapX={GAPCOMMON} products={productsByType} />
          </CategoryProductContainer>
        </ProductMain>
      </ProductContainer>
    </Layout>
  );
};

export default Product;
