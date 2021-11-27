import type { NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import Cart from "@containers/Cart";
import MetaTitle from "@designs/MetaTitle";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slices/common";

const CartPage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Cart" />
      <Cart />
    </Fragment>
  );
};

export default CartPage;

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  }
);
