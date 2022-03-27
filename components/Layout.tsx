import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_package_v0.16/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_package_v0.16/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_package_v0.16/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon_package_v0.16/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      ></link>
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        src="https://kit.fontawesome.com/fd07a2fb4b.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <Header />
    <div className="">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;