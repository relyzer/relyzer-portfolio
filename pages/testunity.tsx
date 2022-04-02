import React from "react";
import Layout from "../components/Layout";

const testunity = () => {
  return (
    <Layout title="Citadel Gateway VR experience">
      <div className="flex justify-center items-center h-screen">
        <iframe
          id="gatewayVR"
          title="Citadel Gateway VR experience"
          width="1200"
          height="850"
          src="/webGL/index.html"
          //   onMouseDown={}
          //   onMouseUp={}
        ></iframe>
      </div>
    </Layout>
  );
};

export default testunity;
