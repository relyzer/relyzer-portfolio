import Link from "next/link";
import Layout from "../components/Layout";

const PortfolioPage = () => (
  <Layout title="My Projects">
    <h1>Portfolio</h1>
    <p>Details of my projects</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default PortfolioPage;
