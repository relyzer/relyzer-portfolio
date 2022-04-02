import React from "react";

type Props = {
  labelTitle: string;
  devicon?: string;
};

const TechLabel = ({ labelTitle, devicon }: Props) => {
  return (
    <div className="border-2 rounded-lg border-illuminating-emerald bg-illuminating-emerald text-sm w-fit h-fit p-1 flex flex-row items-center">
      {devicon && <i className={`${devicon} text-base text-black pr-1`}></i>}
      {labelTitle}
    </div>
  );
};

export default TechLabel;
