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
      <h5 className="leading-8 flex justify-between">
        <strong>{props.title}</strong>
        <span className="text-right">{props.subTitle}</span>
      </h5>
      <h6 className="leading-8 flex justify-between">
        {props.detail}
        <span className="text-right">{props.subDetail}</span>
      </h6>
    </div>
  );
};

export default ExperienceDetail;
