import Link from "next/link";
import Layout from "../components/Layout";

import CertificateGallery from "../components/sections/CertificateGallery";

const CertificatesPage = () => {
  return (
    <Layout title="My online certificates">
      <div className="text-center">
        <p className="text-xl pt-2">
          Online certificates I collect to motivate myself to learn!
        </p>
      </div>
      <CertificateGallery />
    </Layout>
  );
};

export default CertificatesPage;
