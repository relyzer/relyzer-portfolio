import React from "react";

type Props = {
  timePeriod: string[];
  title: string;
  subtitle: string;
  subtitleTwo?: string;
  description: string;
};

/* Reference: https://codepen.io/mukolweke/pen/MWONEeG */

const TimelineDetail = ({
  timePeriod,
  title,
  subtitle,
  subtitleTwo,
  description,
}: Props) => {
  return (
    <li className="mb-10 ml-6 w-[150px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[600px]">
      <div className="absolute w-4 h-4 bg-white text-green-ocean-green-two border-2 rounded-full -left-[0.6rem]"></div>
      <p className="absolute -left-[3.2rem] sm:-left-[4.5rem] p-0 m-0 leading-relaxed font-bold">
        {timePeriod.map((year) => `${year}\n`)}
      </p>
      <p className="font-bold mb-1 leading-relaxed text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-green-medium-spring-green">
        {title}
      </p>
      <p className="font-bold mb-2 leading-relaxed text-white-cultured">
        {subtitle}
      </p>
      {subtitleTwo && (
        <p className="font-bold mb-3 leading-relaxed text-green-turquoise-green-two">
          {subtitleTwo}
        </p>
      )}
      <p className="tracking-tight leading-relaxed">{description}</p>
    </li>
  );
};

export default TimelineDetail;
