import { Fragment } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { END } from "redux-saga";

import Product from "@containers/Product";
import { wrapper } from "@redux/store";

import MetaTitle from "@designs/MetaTitle";
import { getFacets, getProductsByType } from "@redux/slices/product";

import { getPathProductByType } from "@common/helper/product/getPathProductByType";
import { getCategories } from "@redux/slices/common";
import fetchCommon from "@services/common";

interface IProductPage {
  name?: string;
}

const ProductPage: NextPage<IProductPage> = ({ name }) => {
  return (
    <Fragment>
      <MetaTitle
        title={name ? name.charAt(0).toUpperCase() + name.slice(1) : "Product"}
      />
      <Product />
    </Fragment>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchCommon.getCategories();
  const paths = getPathProductByType(data as any);

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { dispatch, sagaTask } = store;
    const { params } = context;
    const { slug } = params as { slug: Array<string> };

    await dispatch(getCategories());
    // await dispatch(getProductsByType({ id: slug[0] }));
    // await dispatch(getFacets({ id: slug[0] }));

    dispatch(END);
    await sagaTask.toPromise();

    return {
      props: {
        name: slug[1],
      },
      revalidate: 10,
    };
  }
);
