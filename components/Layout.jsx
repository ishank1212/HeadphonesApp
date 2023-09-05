import React from "react";
import Head from "next/head";

import { Footer, Navbar } from "./index.js";

const Layout = (props) => {
  return (
    <div className="layout">
      <Head>
        <title>Headphones Website</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-container">{props.children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
