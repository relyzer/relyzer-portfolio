import React from "react";
import Image from "next/image";
import { Skill } from "../../../interfaces/skills";

type Props = {
  arr: Skill[];
};

const SkillDetail = ({ arr }: Props) => {
  return (
    <div className="text-center space-x-10">
      {arr.map((skill: Skill) => (
        <figure className="inline-block">
          <Image
            src={skill.filePath}
            alt={skill.altText}
            width={60}
            height={60}
          ></Image>
          <figcaption className="">{skill.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SkillDetail;
