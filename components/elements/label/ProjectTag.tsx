import React from "react";

type Props = {
  tagTitle: string;
};

const ProjectTag = ({ tagTitle }: Props) => {
  return (
    <div className="border-2 rounded-lg border-turquoise-green-two bg-turquoise-green-two text-sm lg:text-base 2xl:text-lg w-fit h-fit p-1">
      {tagTitle}
    </div>
  );
};

export default ProjectTag;
