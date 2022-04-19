import React from "react";

type Props = {
  tagTitle: string;
};

const ProjectTag = ({ tagTitle }: Props) => {
  return (
    //bg-green-turquoise-green-two
    <div className="border-2 text-green-ocean-green/80 rounded-lg border-green-ocean-green/40 text-sm lg:text-base 2xl:text-lg w-fit h-fit p-2">
      {tagTitle}
    </div>
  );
};

export default ProjectTag;
