import React from "react";
// import Image from "next/image";
import { Skill } from "../../../interfaces/skills";

type Props = {
  arr: Skill[];
};

const SkillDetail = ({ arr }: Props) => {
  return (
    <div className="text-center space-x-4 sm:space-x-6 lg:space-x-10 2xl:space-x-20">
      {arr.map((skill: Skill) => (
        <figure className="inline-block" key={skill.id}>
          <i className={skill.devicon}></i>
          <figcaption className="">{skill.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SkillDetail;
