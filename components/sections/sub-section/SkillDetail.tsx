import React from "react";
import Image from "next/image";

type Props = {
  filePath: string;
  altText: string;
  caption: string;
};

const SkillDetail = (props: Props) => {
  return (
    <figure className="inline-block">
      <Image
        src={props.filePath}
        alt={props.altText}
        width={60}
        height={60}
      ></Image>
      <figcaption className="">{props.caption}</figcaption>
    </figure>
  );
};

export default SkillDetail;
