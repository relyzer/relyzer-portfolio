// import Link from "next/link";
import React, { useRef } from "react";

import Layout from "../components/Layout";
import {
  Banner,
  About,
  Experience,
  Skills,
  Portfolio,
  Contact,
} from "../components/sections/index";

const IndexPage = () => {
  const aboutRef = useRef(null);

  return (
    <Layout title="Kevin Tan - Software Engineer | UX Designer">
      <Banner />
      <About ref={aboutRef} />
      <Experience /* ref={domRef} */ />
      <Skills /* ref={domRef} */ />
      <Portfolio /* ref={domRef} */ />
      <Contact /* ref={domRef} */ />
    </Layout>
  );
};

export default IndexPage;
