import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <p>404</p>
      <h2>Something is going wrong...</h2>
    </>
  );
};

export default Error;
