import Head from 'next/head';
import { Fragment } from 'react';

interface ITitle {
  name: string;
  description: string;
}

const TitlePage = ({ name, description }: ITitle) => {
  return (
    <Head>
      <meta name={name} content={description} />
    </Head>
  );
};

export default TitlePage;
