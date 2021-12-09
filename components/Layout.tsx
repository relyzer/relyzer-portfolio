import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer className="fixed bottom-0 left-0 w-full h-10 text-center">
      <hr />
      <span className="font-sans text-base">Created by Kevin Tan (Footer)</span>
    </footer>
  </div>
);

export default Layout;


/* import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="content">{children}</div>
      </section>
    </>
  )
} */