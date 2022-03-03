import React from "react";
import MyMenu from "../components/MyMenu";

import MyOffers from "../components/MyOffers";
import OfertaContentArea from "../components/OfertaContentArea";
import MyFooter from "../components/MyFooter";
import Features from "../components/Features";

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
      <Features />
      <MyOffers />
      <MyFooter />
    </div>
  );
};
