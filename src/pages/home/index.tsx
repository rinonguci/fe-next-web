import type { NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import Home from "@containers/Home";
import MetaTitle from "@designs/MetaTitle";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slides/categories";

const HomePage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Fashion" />
      <Home />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  }
);
