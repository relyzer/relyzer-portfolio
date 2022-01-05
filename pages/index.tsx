// import Link from "next/link";
// import { useRef } from "react";
import React from "react";

import Layout from "../components/Layout";
import { Banner, About, Experience, Skills, Portfolio, Contact } from "../components/sections/index"

const IndexPage = () => {
  // const ref = useRef()
  return (
    <Layout title="Kevin Tan">
      <Banner />
      <About />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Portfolio />
      <hr />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
