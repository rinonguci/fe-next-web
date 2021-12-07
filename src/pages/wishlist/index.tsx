import type { GetServerSideProps, NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import Wishlist from "@containers/Wishlist";
import MetaTitle from "@designs/MetaTitle";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slices/common";

const WishlistPage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Wishlist" />
      <Wishlist />
    </Fragment>
  );
};

export default WishlistPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  });
