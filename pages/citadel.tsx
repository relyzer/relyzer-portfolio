import React from "react";
import Layout from "../components/Layout";
import Unity, { UnityContent } from "react-unity-webgl";

// See: https://github.com/jeffreylanters/react-unity-webgl/issues/139 to run WebGL in Next.js

const citadelPage = () => {
  const unityContent = new UnityContent(
    "webGL/Build/WebGL.json",
    "webGL/Build/UnityLoader.js"
  );

  unityContent.on("quitted", () => {
    console.log('Game quit')
  })
  unityContent.on("loaded", () => {
    console.log('Game loaded')
  })
  unityContent.on("progress", progression => {
    console.log('Game loading', progression)
  })
  unityContent.on("error", message => {
    console.log('Game errored', message)
  })
  unityContent.on("DemoUnityToReact", (params) => {
    console.log('DemoUnityToReact', params)
  })

  return (
    <Layout title="My Projects">
      <h1>Test Unity WebGL Player run</h1>
      <p>Citadel Gateway</p>
      <div><Unity unityContent={unityContent} /></div>
    </Layout>
  );
};

export default citadelPage;
