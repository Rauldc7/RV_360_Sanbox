import React from "react";
import MyMenu from "../components/MyMenu";
import ContactContentArea from "../components/ContactContentArea";

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
      <ContactContentArea />
    </div>
  );
};
