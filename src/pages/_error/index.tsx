import type { NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import Error from "@containers/Error";
import MetaTitle from "@designs/MetaTitle";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slices/common";

const ErrorPage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Fashion" />
      <Error />
    </Fragment>
  );
};

export default ErrorPage;

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  }
);
