import React from "react";

type Props = {
  tagTitle: string;
};

const ProjectTag = ({ tagTitle }: Props) => {
  return (
    <div className="border-2 rounded-lg border-turquoise-green-two bg-turquoise-green-two text-sm w-fit h-fit p-1">
      {tagTitle}
    </div>
  );
};

export default ProjectTag;
