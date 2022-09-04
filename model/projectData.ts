import generateUniqueID from "../lib/utility/generateUniqueID";
import { Project } from "../interfaces/project";

const projectArr: Project[] = [
  {
    id: generateUniqueID(),
    title: "Citadel VR Experience",
    description:
      "Mini project to explore basic virtual reality scene development - featuring music, sound effects, particles and 3D visuals.\nCreated using Unity, Maya 3D modeling and Vuforia virtual reality toolkit (VRTK).\n\nClick the demo button to run the unity build.\n\nNote: Demo contains sound and may not be optimised for certain devices.",
    demoUrl: "/citadel",
    snapshotUrl: "/images/vr-demo-1.png",
    altText: "Three dimensional virtual reality environment",
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
    tags: ["Game Design", "Virtual Reality", "3D Modeling"],
    redirectExternal: false,
  },
  {
    id: generateUniqueID(),
    title: "Portfolio Website",
    description:
      "Personal website to tell my story and showcase my projects.\n\n Equipped with the ability to run Unity WebGL for gameplay demonstration and PDF viewer to display my online course certificates.",
    snapshotUrl: "/images/Portfolio-snapshot.png",
    altText: "Screenshot of Kevin's portfolio website",
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
      "Mobile application based off an outdoor-social concept, designed to connect people with the environment around them.\n\nThe word 'Amprise' is a twist on 'emprise', which is a synonym to the words 'adventure', 'undertaking', 'quest'.\n\nThis mobile application was developed in native iOS by myself, alongside a team of 5 other aspiring UX designers who crafted the Figma high-fidelity prototype whilst contributing to the UI and UX design.\n\nTake a look at the UX case study for more information!",
    demoUrl: "http://uxfol.io/p/kevintyh/045b2e10",
    snapshotUrl: "/images/Amprise-ux.png",
    altText: "Mobile application's user interface mock-ups",
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
    title: "Oracle Technical Challenge",
    description:
      "A simple program listing website created in less than a week for Oracle's take-home challenge, that displays programs from a JSON file and calls an external API to produce fun facts derived from the program's release year.\n\nIn this project, I took on the additional challenge of learning Redux, Cypress e2e testing and Jest/React Testing library within a short timeframe.",
    demoUrl: "https://oracle-technical-challenge.vercel.app/",
    snapshotUrl: "/images/oracle-challenge-snapshot.png",
    altText: "Website displaying images of movies",
    githubUrl: "https://github.com/relyzer/Oracle-technical-challenge",
    techStack: [
      {
        tech: "Next.js",
        devicon: "devicon-nextjs-original",
      },
      {
        tech: "TailwindCSS",
        devicon: "devicon-tailwindcss-plain",
      },
      {
        tech: "Redux",
        devicon: "devicon-redux-original",
      },
      {
        tech: "Jest",
        devicon: "devicon-jest-plain",
      },
    ],
    tags: ["Web Development"],
    redirectExternal: true,
  },
];

export { projectArr };
