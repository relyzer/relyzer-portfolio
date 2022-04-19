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
        "Personal website to tell my story and showcase my projects.\nComes with Unity WebGL for gameplay demonstration and PDFs to display my online course certificates.",
      snapshotUrl: "/images/Portfolio-snapshot.png",
      altText: "A screenshot image of Kevin's website",
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
        "Mobile application based off an outdoor-social concept, designed to connect people with the environment around them.\nThe word 'Amprise' is a twist on 'emprise', which is a synonym to the words 'adventure', 'undertaking', 'quest'.\n\nTake a look at the UX case study for more information!",
      demoUrl: "http://uxfol.io/p/kevintyh/045b2e10",
      snapshotUrl: "/images/Amprise-ux.png",
      altText: "Images of a mobile application's user interface mock-ups",
      techStack: [
        {
          tech: "Swift",
          devicon: "devicon-swift-plain",
        },
        {
          tech: "Figma",
          devicon: "devicon-figma-plain",
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
        "Mini project created using Unity, Maya 3D modelling and Vuforia virtual reality toolkit (VRTK).\nClick the demo button to run the unity build.\n\nNote: Demo contains sound and may not be optimised for certain devices.",
      demoUrl: "/citadel",
      snapshotUrl: "/images/vr-demo-1.png",
      altText: "An image of a three dimensional virtual reality environment",
      techStack: [
        {
          tech: "Unity",
          devicon: "devicon-unity-original",
        },
        {
          tech: "Maya",
          devicon: "devicon-maya-plain",
        },
      ],
      tags: ["Unity", "Game Design"],
      redirectExternal: false,
    },
  ];
  return (
    <FadeInSection>
      <section id="portfolio" ref={ref} className="section">
        <div className="card p-4 md:p-6 lg:p-8 xl:p-16 2xl:p-20">
          <h3 className="sub-header">Portfolio</h3>
          <ProjectDetail arr={projectArr} />
        </div>
      </section>
    </FadeInSection>
  );
};

export default Portfolio;
