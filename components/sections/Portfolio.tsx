import React, { RefObject } from "react";

import FadeInSection from "../animation/FadeInSection";
import { ProjectDetail } from "./sub-section";
import { Project } from "../../interfaces/project";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Portfolio = ({ ref }: Props) => {
  const projectArr: Project[] = [
    {
      id: generateUniqueID(),
      title: "Portfolio Website",
      description:
        "A personal website about myself and to showcase my projects.\nComes with Unity WebGL for gameplay demonstration and PDFs to display my online certificates.",
      snapshotUrl: "/images/Portfolio_website.png",
      githubUrl: "https://github.com/relyzer/relyzer.github.io",
      techStack: [
        {
          tech: "TypeScript",
          devicon: "devicon-typescript-plain",
        },
        {
          tech: "Next.js",
          devicon: "devicon-nextjs-original",
        },
        {
          tech: "React.js",
          devicon: "devicon-react-original",
        },
        {
          tech: "TailwindCSS",
          devicon: "devicon-tailwindcss-plain",
        },
      ],
      tags: ["Web Development"],
      redirectExternal: true,
    },
    {
      id: generateUniqueID(),
      title: "Amprise",
      description:
        "An outdoor-social mobile application designed to connect people and the environment around them.\nThe word 'Amprise' is a twist on 'emprise', which is a synonym to the words 'adventure', 'undertaking', 'quest'.\nTake a look at the UX case study for more information!",
      demoUrl: "http://uxfol.io/p/kevintyh/045b2e10",
      snapshotUrl: "/images/Amprise-ux.png",
      techStack: [
        {
          tech: "Swift",
          devicon: "devicon-swift-plain",
        },
      ],
      tags: ["Mobile App Development", "UI/UX Design"],
      demoButtonText: "UX case study",
      redirectExternal: true,
    },
    {
      id: generateUniqueID(),
      title: "Citadel VR Experience",
      description:
        "A project where I did 3D-modeling and learn about Vuforia virtual reality toolkit (VRTK).\nClick on the demo to run the unity build.\nNote: Demo contains sound and may not be optimised for certain devices.",
      demoUrl: "/citadel",
      snapshotUrl: "/images/vr-demo-1.png",
      techStack: [
        {
          tech: "Unity",
          devicon: "devicon-unity-original",
        },
      ],
      tags: ["Unity game engine", "Game Design"],
      redirectExternal: false,
    },
  ];
  return (
    <FadeInSection>
      <section id="portfolio" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">Portfolio</h2>
          <ProjectDetail arr={projectArr} />
        </div>
      </section>
    </FadeInSection>
  );
};

export default Portfolio;
