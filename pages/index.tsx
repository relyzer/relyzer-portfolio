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
import FadeInSection from "../components/FadeInSection";

const IndexPage = () => {
  const aboutRef = useRef(null)

  return (
    <Layout title="Kevin Tan - Software Engineer | UX Designer">
      <FadeInSection>
        <Banner />
        <About ref={aboutRef} />
        <hr />
        <Experience /* ref={domRef} */ />
        <hr />
        <Skills /* ref={domRef} */ />
        <hr />
        <Portfolio /* ref={domRef} */ />
        <hr />
        <Contact /* ref={domRef} */ />
      </FadeInSection>
    </Layout>
  );
};

export default IndexPage;
