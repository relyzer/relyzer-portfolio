import React from "react";

const Banner = () => {
  return (
    <section className="w-auto m-auto h-60 p-20 rounded-b-xl">
      <div className="absolute atom-spinner atom-position">
        <div className="spinner-inner">
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
      <h1 className="font-extrabold text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-2">
        Kev&#305;n Tan
      </h1>
      <h3 className="font-medium text-center text-base sm:text-lg md:text-lg lg:text-2xl p-4 fade-in-text">
        Software Engineer & UI/UX Designer
      </h3>
    </section>
  );
};

export default Banner;
