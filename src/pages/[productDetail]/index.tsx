import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import { wrapper } from "@redux/store";

import MetaTitle from "@designs/MetaTitle";

import { getCategories } from "@redux/slides/data/categories";
import fetchProduct from "@services/products";
import { getPathProductAll } from "@common/helper/product/getPathAllProduct";
import ProductDetailPage from "@containers/ProductDetail";

const ProductPage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Sản phẩm" />
      <ProductDetailPage />
    </Fragment>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchProduct.getAllProduct({});
  const paths = getPathProductAll(data!);

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { dispatch, sagaTask } = store;
      const { productDetail } = params as { productDetail: string };

      dispatch(getCategories());
      dispatch(END);
      await sagaTask.toPromise();

      return {
        props: {},
        revalidate: 10000,
      };
    }
);
