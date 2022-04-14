import React from "react";

type Props = {
  tagTitle: string;
};

const ProjectTag = ({ tagTitle }: Props) => {
  return (
    //bg-green-turquoise-green-two
    <div className="bg-green-turquoise-green-two/75 text-green-dark-jungle-green/80 rounded-lg border-turquoise-green-two text-sm lg:text-base 2xl:text-lg w-fit h-fit p-2">
      {tagTitle}
    </div>
  );
};

export default ProjectTag;
