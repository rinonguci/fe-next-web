import type { NextPage } from "next";
import { END } from "redux-saga";

import { wrapper } from "@redux/store";
import { HomeContainer } from "@containers/Home";
import { Fragment } from "react";
import MetaTitle from "@designs/MetaTitle";

import { getCategories } from "@redux/slides/categories";

const Home: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Fashion" />
      <HomeContainer></HomeContainer>
    </Fragment>
  );
};

export default Home;

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());
    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  }
);
