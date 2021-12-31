import Link from "next/link";
import Layout from "../components/Layout";

import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const IndexPage = () => (
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

export default IndexPage;
