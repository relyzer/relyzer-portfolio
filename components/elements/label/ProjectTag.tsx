import React from "react";

type Props = {
  tagTitle: string;
};

const ProjectTag = ({ tagTitle }: Props) => {
  return (
    //bg-green-turquoise-green-two
    <div className="border-2 text-green-medium-spring-green/90 rounded-lg border-green-medium-spring-green/60 w-fit h-fit text-sm lg:text-base 2xl:text-lg p-2">
      {tagTitle}
    </div>
  );
};

export default ProjectTag;
