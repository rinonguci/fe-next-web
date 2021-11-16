import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import { wrapper } from "@redux/store";

import MetaTitle from "@designs/MetaTitle";

import { getCategories } from "@redux/slides/data/categories";
import fetchProduct from "@services/products";
import { getPathProductAll } from "@common/helper/product/getPathAllProduct";
import ProductDetail from "@containers/ProductDetail";
import { getProductDetail } from "@redux/slides/data/product";
import { useAppSelector } from "@hooks/redux";

const ProductDetailPage: NextPage = (props) => {
  const { productDetail } = useAppSelector(
    (state) => state.dataReducers.productReducer
  );
  return (
    <Fragment>
      <MetaTitle title={productDetail?.name || "Product"} />
      <ProductDetail />
    </Fragment>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchProduct.getAllProduct({});
  const paths = getPathProductAll(data!);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { dispatch, sagaTask } = store;
      const { productDetail } = params as { productDetail: string[] };

      dispatch(getCategories());
      dispatch(getProductDetail({ id: productDetail[0] }));
      dispatch(END);
      await sagaTask.toPromise();

      return {
        props: {},
        revalidate: 60 * 60 * 24,
      };
    }
);
