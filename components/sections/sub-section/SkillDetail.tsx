import React from "react";
// import Image from "next/image";
import { Skill } from "../../../interfaces/skills";

type Props = {
  skillTitle: string;
  arr: Skill[];
};

const SkillDetail = ({ arr, skillTitle }: Props) => {
  return (
    <div className="">
      <h4 className="text-center font-semibold p-4">{skillTitle}</h4>
      <div className="text-center space-x-4 sm:space-x-6 lg:space-x-10 2xl:space-x-20">
        {arr.map((skill: Skill) => (
          <figure className="inline-block" key={skill.id}>
            <i className={skill.devicon}></i>
            <figcaption className="">{skill.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default SkillDetail;
