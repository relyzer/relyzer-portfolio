import React from "react";

type Props = {
  title: string;
  subTitle?: string;
  detail: string;
  subDetail?: string;
};

const ExperienceDetail = (props: Props) => {
  return (
    <div className="p-4">
      <h3 className="leading-8 flex justify-between">
        <strong>{props.title}</strong>
        <span className="text-right">{props.subTitle}</span>
      </h3>
      <p className="leading-8 flex justify-between">
        {props.detail}
        <span className="text-right">{props.subDetail}</span>
      </p>
    </div>
  );
};

export default ExperienceDetail;
