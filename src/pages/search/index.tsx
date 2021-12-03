import { Fragment } from "react";
import type { GetStaticProps, NextPage } from "next";

import MetaTitle from "@designs/MetaTitle";

import Search from "@containers/Search";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slices/common";
import { END } from "redux-saga";
import { searchProduct } from "@redux/slices/product";
import { useRouter } from "next/router";

interface IProductPage {
  name?: string;
}

const ProductPage: NextPage<IProductPage> = ({ name }) => {
  return (
    <Fragment>
      <MetaTitle title={"Product"} />
      <Search />
    </Fragment>
  );
};

export default ProductPage;

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();

    return {
      props: {},
      revalidate: 60 * 60 * 24,
    };
  }
);
