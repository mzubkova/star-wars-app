import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { wrapper } from "../store/store";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
      position:relative;
      font-size: 14px;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #46244C;
      overflow-y: scroll;
  }
  html {
    min-height: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
   a:visited {
    color: black;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>NextJS App From Scratch</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
