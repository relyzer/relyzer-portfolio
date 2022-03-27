import React, { RefObject } from "react";

import { Skill } from "../../interfaces/skills";
import SkillDetail from "./sub-section/SkillDetail";
import { ForwardLink } from "../elements/button";
import FadeInSection from "../animation/FadeInSection";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Skills = ({ ref }: Props) => {
  const programmingArr: Skill[] = [
    {
      // filePath: "/html5_icon.svg",
      // altText: "HTML5 logo",
      id: generateUniqueID(),
      devicon:"devicon-html5-plain",
      caption: "HTML5",
    },
    {
      // filePath: "/css3_icon.svg",
      // altText: "CSS3 logo",
      id: generateUniqueID(),
      devicon:"devicon-css3-plain",
      caption: "CSS3",
    },
    {
      // filePath: "/typescript_icon.svg",
      // altText: "TypeScript logo",
      id: generateUniqueID(),
      devicon:"devicon-typescript-plain",
      caption: "TypeScript",
    },
    {
      // filePath: "/javascript_icon.svg",
      // altText: "JavaScript logo",
      id: generateUniqueID(),
      devicon:"devicon-javascript-plain",
      caption: "JavaScript",
    },
    {
      // filePath: "/swift_icon.svg",
      // altText: "iOS Swift logo",
      id: generateUniqueID(),
      devicon:"devicon-swift-plain",
      caption: "Swift",
    },
  ];

  const frontendArr: Skill[] = [
    {
      // filePath: "/react_icon.svg",
      // altText: "React logo",
      id: generateUniqueID(),
      devicon:"devicon-react-original",
      caption: "React.js",
    },
    {
      // filePath: "/nextjs_icon.svg",
      // altText: "Next.js logo",
      id: generateUniqueID(),
      devicon:"devicon-nextjs-original",
      caption: "Next.js",
    },
    {
      // filePath: "/tailwindcss_icon.svg",
      // altText: "TailwindCSS logo",
      id: generateUniqueID(),
      devicon:"devicon-tailwindcss-plain",
      caption: "TailwindCSS",
    },
  ];

  const backendArr: Skill[] = [
    {
      // filePath: "/nodejs_icon.svg",
      // altText: "Node.js logo",
      id: generateUniqueID(),
      devicon:"devicon-nodejs-plain",
      caption: "Node.js",
    },
    {
      // filePath: "/firebase_icon.svg",
      // altText: "Firebase logo",
      id: generateUniqueID(),
      devicon:"devicon-firebase-plain",
      caption: "Firebase",
    },
    {
      // filePath: "/mysql_icon.svg",
      // altText: "MySQL logo",
      id: generateUniqueID(),
      devicon:"devicon-mysql-plain",
      caption: "MySQL",
    },
    {
      // filePath: "/redis_icon.svg",
      // altText: "Redis logo",
      id: generateUniqueID(),
      devicon:"devicon-redis-plain",
      caption: "Redis",
    },
  ];

  const mobileArr: Skill[] = [
    {
      // filePath: "/xcode_icon.png",
      // altText: "Xcode logo",
      id: generateUniqueID(),
      devicon:"",
      caption: "Xcode",
    },
  ];

  const designArr: Skill[] = [
    {
      // filePath: "/photoshop_icon.svg",
      // altText: "Photoshop logo",
      id: generateUniqueID(),
      devicon:"devicon-photoshop-plain",
      caption: "Adobe Photoshop",
    },
    {
      // filePath: "/figma_icon.svg",
      // altText: "Figma logo",
      id: generateUniqueID(),
      devicon:"devicon-figma-plain",
      caption: "Figma",
    },
  ];

  const devOpsArr: Skill[] = [
    {
      // filePath: "/git_icon.svg",
      // altText: "Git logo",
      id: generateUniqueID(),
      devicon:"devicon-git-plain",
      caption: "Git",
    },
    {
      // filePath: "/docker_icon.svg",
      // altText: "Docker logo",
      id: generateUniqueID(),
      devicon:"devicon-docker-plain",
      caption: "Docker",
    },
    {
      // filePath: "/docker_icon.svg",
      // altText: "Docker logo",
      id: generateUniqueID(),
      devicon:"devicon-azure-plain",
      caption: "Azure",
    },
  ];

  const othersArr: Skill[] = [
    {
      // filePath: "/unity_icon.svg",
      // altText: "Unity logo",
      id: generateUniqueID(),
      devicon:"devicon-unity-original",
      caption: "Unity3D",
    },
    {
      // filePath: "/vega-lite_icon.svg",
      // altText: "Vega-lite logo",
      id: generateUniqueID(),
      devicon:"",
      caption: "Vega-lite",
    },
    {
      // filePath: "/matlab_icon.svg",
      // altText: "MATLAB logo",
      id: generateUniqueID(),
      devicon:"devicon-matlab-plain",
      caption: "MATLAB",
    },
    {
      // filePath: "/autocad_icon.svg",
      // altText: "AutoCAD logo",
      id: generateUniqueID(),
      devicon:"",
      caption: "AutoCAD",
    },
    {
      // filePath: "/maya_icon.svg",
      // altText: "Autodesk Maya logo",
      id: generateUniqueID(),
      devicon:"",
      caption: "Autodesk Maya",
    },
    {
      id: generateUniqueID(),
      devicon:"devicon-confluence-original",
      caption: "Confluence",
    },
    {
      id: generateUniqueID(),
      devicon:"devicon-jira-plain",
      caption: "Jira",
    },
    {
      id: generateUniqueID(),
      devicon:"devicon-trello-plain",
      caption: "Trello",
    },
    {
      id: generateUniqueID(),
      devicon:"devicon-wordpress-plain",
      caption: "WordPress",
    },
  ];

  return (
    <FadeInSection>
      <section id="skill" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">My Skills</h2>
          <h3 className="text-center font-semibold p-4">
            Programming/Markup languages
          </h3>
          <SkillDetail arr={programmingArr} />

          <h3 className="text-center font-semibold p-4">
            Front-end Technologies
          </h3>
          <SkillDetail arr={frontendArr} />

          <h3 className="text-center font-semibold p-4">
            Back-end Technologies
          </h3>
          <SkillDetail arr={backendArr} />

          <h3 className="text-center font-semibold p-4">
            Mobile App Technologies
          </h3>
          <SkillDetail arr={mobileArr} />

          <h3 className="text-center font-semibold p-4">UI/UX Design</h3>
          <SkillDetail arr={designArr} />

          <h3 className="text-center font-semibold p-4">DevOps / Cloud</h3>
          <SkillDetail arr={devOpsArr} />

          <details>
            <summary className="text-center font-semibold p-4 cursor-pointer">
              Others (Click to reveal)
            </summary>
            <SkillDetail arr={othersArr} />
          </details>
        </div>
        <ForwardLink href="#portfolio" title="projects" />
      </section>
    </FadeInSection>
  );
};

export default Skills;
