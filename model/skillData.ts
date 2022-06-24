import { Skill } from "../interfaces/skills";
import generateUniqueID from "../lib/utility/generateUniqueID";

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
    devicon: "devicon-matlab-plain",
    caption: "MATLAB",
  },
  {
    id: generateUniqueID(),
    devicon: "devicon-maya-plain",
    caption: "Maya",
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

export {
  programmingArr,
  frontendArr,
  backendArr,
  mobileArr,
  designArr,
  devOpsArr,
  othersArr,
};
