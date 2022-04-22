import Head from "next/head";
import Info from "../../components/Info";

type TProps = {
  info: {
    title: string;
    director: string;
    release_date: string;
    opening_crawl: string;
  };
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { info: data },
  };
};

const InfoPage = ({ info }: TProps) => (
  <>
    <Head>
      <title>Info</title>
    </Head>
    <Info info={info} />
  </>
);

export default InfoPage;
