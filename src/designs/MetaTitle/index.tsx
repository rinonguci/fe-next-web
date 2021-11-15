import Head from "next/head";
import { TITLE_DEFAULT } from "@common/constants";

interface ITitle {
  title: string;
}

const MetaTitle = ({ title = TITLE_DEFAULT }: ITitle) => {
  return (
    <Head>
      <title>{`${title} - Summon Shop`} </title>
    </Head>
  );
};

export default MetaTitle;
