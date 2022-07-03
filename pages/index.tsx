// import Link from "next/link";
import React, { useRef } from "react";

import Layout from "../components/Layout";
import {
  Banner,
  About,
  Experience,
  Skills,
  Portfolio,
} from "../components/sections/index";

const IndexPage = () => {
  return (
    <Layout title="Kevin Tan - Software Engineer">
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
    </Layout>
  );
};

export default IndexPage;
