import React from "react";
import MyMenu from "../components/MyMenu";
import MainContentArea from "../components/MainContentArea";
import MyFooter from "../components/MyFooter";
import Head from "next/head";

export default props => {
  return (
    <div>
      <Head>
        <title>The Hub</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        />
      </Head>
      <MyMenu />
      <MainContentArea />
      <MyFooter />{" "}
    </div>
  );
};
