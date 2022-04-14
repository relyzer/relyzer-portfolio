import React from "react";

type Props = {
  labelTitle: string;
  devicon?: string;
};

const TechLabel = ({ labelTitle, devicon }: Props) => {
  return (
    <div className="border-2 rounded-lg border-green-illuminating-emerald/40 bg-illuminating-emerald text-sm w-fit h-fit p-1 lg:p-2 flex flex-row items-center">
      {devicon && <i className={`${devicon} text-base lg:text-xl text-green-bottle-green/80 pr-1`}></i>}
      <span className="select-all text-green-bottle-green/90">{labelTitle}</span>
    </div>
  );
};

export default TechLabel;
