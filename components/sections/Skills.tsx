import React, { RefObject } from "react";

import { Skill } from "../../interfaces/skills";
import { SkillDetail } from "./sub-section";
import FadeInSection from "../animation/FadeInSection";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Skills = ({ ref }: Props) => {
  const programmingArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-html5-plain",
      caption: "HTML5",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-css3-plain",
      caption: "CSS3",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-typescript-plain",
      caption: "TypeScript",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-javascript-plain",
      caption: "JavaScript",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-swift-plain",
      caption: "Swift",
    },
  ];

  const frontendArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-react-original",
      caption: "React.js",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-nextjs-original",
      caption: "Next.js",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-tailwindcss-plain",
      caption: "TailwindCSS",
    },
  ];

  const backendArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-nodejs-plain",
      caption: "Node.js",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-firebase-plain",
      caption: "Firebase",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-mysql-plain",
      caption: "MySQL",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-redis-plain",
      caption: "Redis",
    },
  ];

  const mobileArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-xcode-plain",
      caption: "Xcode",
    },
  ];

  const designArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-photoshop-plain",
      caption: "Adobe Photoshop",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-figma-plain",
      caption: "Figma",
    },
  ];

  const devOpsArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-git-plain",
      caption: "Git",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-docker-plain",
      caption: "Docker",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-azure-plain",
      caption: "Azure",
    },
  ];

  const othersArr: Skill[] = [
    {
      id: generateUniqueID(),
      devicon: "devicon-unity-original",
      caption: "Unity",
    },
    {
      id: generateUniqueID(),
      devicon: "",
      caption: "Vega-lite",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-matlab-plain",
      caption: "MATLAB",
    },
    {
      id: generateUniqueID(),
      devicon: "",
      caption: "AutoCAD",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-maya-plain",
      caption: "Autodesk Maya",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-confluence-original",
      caption: "Confluence",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-jira-plain",
      caption: "Jira",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-trello-plain",
      caption: "Trello",
    },
    {
      id: generateUniqueID(),
      devicon: "devicon-wordpress-plain",
      caption: "WordPress",
    },
  ];

  return (
    <FadeInSection>
      <section id="skill" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h3 className="sub-header">Skills</h3>
          <h4 className="text-center font-semibold p-4">
            Programming / Mark-up languages
          </h4>
          <SkillDetail arr={programmingArr} />

          <h4 className="text-center font-semibold p-4">
            Front-end Technologies
          </h4>
          <SkillDetail arr={frontendArr} />

          <h4 className="text-center font-semibold p-4">
            Back-end Technologies
          </h4>
          <SkillDetail arr={backendArr} />

          <h4 className="text-center font-semibold p-4">
            Mobile App Technologies
          </h4>
          <SkillDetail arr={mobileArr} />

          <h4 className="text-center font-semibold p-4">UI/UX Design</h4>
          <SkillDetail arr={designArr} />

          <h4 className="text-center font-semibold p-4">DevOps / Cloud</h4>
          <SkillDetail arr={devOpsArr} />

          <details>
            <summary className="text-center font-semibold p-4 cursor-pointer">
              Others
            </summary>
            <div className="details-div">
              <SkillDetail arr={othersArr} />
            </div>
          </details>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;
