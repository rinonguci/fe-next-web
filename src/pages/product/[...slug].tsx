import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import ProductDetail from "@containers/ProductDetail";

import { wrapper } from "@redux/store";
import { getProductDetail } from "@redux/slides/product";
import { getCategories } from "@redux/slides/common";
import fetchProduct from "@services/products";
import { getPathProductAll } from "@common/helper/product/getPathAllProduct";
import { useAppSelector } from "@hooks/redux";
import MetaTitle from "@designs/MetaTitle";

const ProductDetailPage: NextPage = (props) => {
  const { productDetail } = useAppSelector((state) => state.productReducers);
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
  const paths = getPathProductAll(data);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { dispatch, sagaTask } = store;
      const { slug } = params as { slug: string[] };

      dispatch(getCategories());
      dispatch(getProductDetail({ id: slug[0] }));
      dispatch(END);
      await sagaTask.toPromise();

      return {
        props: {},
        revalidate: 60 * 60 * 24,
      };
    }
);
