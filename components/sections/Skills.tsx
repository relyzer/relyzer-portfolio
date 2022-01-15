import React, { RefObject } from "react";

import { Skill } from "../../interfaces/skills";
import SkillDetail from "./sub-section/SkillDetail";
import { ForwardLink } from "../elements/button";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Skills = ({ ref }: Props) => {
  const programmingArr: Skill[] = [
    {
      filePath: "/html5_icon.svg",
      altText: "HTML5 logo",
      caption: "HTML5",
    },
    {
      filePath: "/css3_icon.svg",
      altText: "CSS3 logo",
      caption: "CSS3",
    },
    {
      filePath: "/typescript_icon.svg",
      altText: "TypeScript logo",
      caption: "TypeScript",
    },
    {
      filePath: "/javascript_icon.svg",
      altText: "JavaScript logo",
      caption: "JavaScript",
    },
    {
      filePath: "/swift_icon.svg",
      altText: "iOS Swift logo",
      caption: "Swift",
    },
  ];

  const frontendArr: Skill[] = [
    {
      filePath: "/react_icon.svg",
      altText: "React logo",
      caption: "React.js",
    },
    {
      filePath: "/nextjs_icon.svg",
      altText: "Next.js logo",
      caption: "Next.js",
    },
    {
      filePath: "/tailwindcss_icon.svg",
      altText: "TailwindCSS logo",
      caption: "TailwindCSS",
    },
  ];

  const backendArr: Skill[] = [
    {
      filePath: "/nodejs_icon.svg",
      altText: "Node.js logo",
      caption: "Node.js",
    },
    {
      filePath: "/firebase_icon.svg",
      altText: "Firebase logo",
      caption: "Firebase",
    },
    {
      filePath: "/mysql_icon.svg",
      altText: "MySQL logo",
      caption: "MySQL",
    },
    {
      filePath: "/redis_icon.svg",
      altText: "Redis logo",
      caption: "Redis",
    },
  ];

  const mobileArr: Skill[] = [
    {
      filePath: "/xcode_icon.png",
      altText: "Xcode logo",
      caption: "Xcode",
    },
  ];

  const designArr: Skill[] = [
    {
      filePath: "/photoshop_icon.svg",
      altText: "Photoshop logo",
      caption: "Adobe Photoshop",
    },
    {
      filePath: "/figma_icon.svg",
      altText: "Figma logo",
      caption: "Figma",
    },
  ];

  const devOpsArr: Skill[] = [
    {
      filePath: "/git_icon.svg",
      altText: "Git logo",
      caption: "Git",
    },
    {
      filePath: "/docker_icon.svg",
      altText: "Docker logo",
      caption: "Docker",
    },
  ];

  const othersArr: Skill[] = [
    {
      filePath: "/unity_icon.svg",
      altText: "Unity logo",
      caption: "Unity3D",
    },
    {
      filePath: "/vega-lite_icon.svg",
      altText: "Vega-lite logo",
      caption: "Vega-lite",
    },
    {
      filePath: "/matlab_icon.svg",
      altText: "MATLAB logo",
      caption: "MATLAB",
    },
    {
      filePath: "/autocad_icon.svg",
      altText: "AutoCAD logo",
      caption: "AutoCAD",
    },
    {
      filePath: "/maya_icon.svg",
      altText: "Autodesk Maya logo",
      caption: "Autodesk Maya",
    },
  ];

  return (
    <section id="skill" ref={ref} className="section">
      <div className="w-auto h-auto flex-auto card">
        <h2 className="sub-header">My Skills</h2>
        <h3 className="text-center font-semibold p-4">
          Programming/Markup languages
        </h3>
        <div className="text-center space-x-10">
          {programmingArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <h3 className="text-center font-semibold p-4">
          Front-end Technologies
        </h3>
        <div className="text-center space-x-10">
          {frontendArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <h3 className="text-center font-semibold p-4">Back-end Technologies</h3>
        <div className="text-center space-x-10">
          {backendArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <h3 className="text-center font-semibold p-4">
          Mobile App Technologies
        </h3>
        <div className="text-center space-x-10">
          {mobileArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <h3 className="text-center font-semibold p-4">UI/UX Design</h3>
        <div className="text-center space-x-10">
          {designArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <h3 className="text-center font-semibold p-4">DevOps</h3>
        <div className="text-center space-x-10">
          {devOpsArr.map((skill: Skill) => (
            <SkillDetail
              filePath={skill.filePath}
              altText={skill.altText}
              caption={skill.caption}
            />
          ))}
        </div>

        <details>
          <summary className="text-center font-semibold p-4 cursor-pointer">
            Others (Click to reveal)
          </summary>
          <div className="text-center space-x-10">
            {othersArr.map((skill: Skill) => (
              <SkillDetail
                filePath={skill.filePath}
                altText={skill.altText}
                caption={skill.caption}
              />
            ))}
          </div>
        </details>
      </div>
      <ForwardLink href="#portfolio" title="projects" />
    </section>
  );
};

export default Skills;
