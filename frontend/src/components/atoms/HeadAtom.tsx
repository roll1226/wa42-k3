import Head from "next/head";

type Props = {
  title: string;
};

const HeadAtoms = ({ title }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="none, noindex, nofollow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="wa42のkadai6" />
      <meta name="keywords" content="wa42 kadai kadai6" />
      <link rel="canonical" href="/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadAtoms;
