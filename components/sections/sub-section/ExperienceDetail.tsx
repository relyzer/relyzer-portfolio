import React from "react";

type Props = {
  key: string;
  title: string;
  subTitle?: string;
  detail: string;
  subDetail?: string;
};

const ExperienceDetail = (props: Props) => {
  return (
    <div className="p-4">
      <h4 className="leading-8 md:pt-2 flex justify-between">
        <strong>{props.title}</strong>
        <span className="text-right">{props.subTitle}</span>
      </h4>
      <p className="text-xs sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-1 md:pt-4 leading-8 flex justify-between">
        {props.detail}
        <span className="text-right">{props.subDetail}</span>
      </p>
    </div>
  );
};

export default ExperienceDetail;
