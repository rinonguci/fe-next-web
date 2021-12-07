import type { GetServerSideProps, NextPage } from "next";
import { Fragment } from "react";
import { END } from "redux-saga";

import Account from "@containers/Account";
import MetaTitle from "@designs/MetaTitle";
import { wrapper } from "@redux/store";
import { getCategories } from "@redux/slices/common";

const AccountPage: NextPage = (props) => {
  return (
    <Fragment>
      <MetaTitle title="Fashion" />
      <Account />
    </Fragment>
  );
};

export default AccountPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const { dispatch, sagaTask } = store;

    dispatch(getCategories());

    dispatch(END);
    await sagaTask.toPromise();
    return { props: {} };
  });
