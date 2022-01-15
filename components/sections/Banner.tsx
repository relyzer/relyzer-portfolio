import React from "react";

const Banner = () => {
  return (
    <section className="flex justify-center items-center -mt-12 h-screen p-20 rounded-b-xl">
      <div className="">
        <div className="absolute atom-spinner atom-position">
          <div className="spinner-inner">
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-circle">&#9679;</div>
          </div>
        </div>
        <h1 className="font-extrabold text-center p-2">Kev&#305;n Tan</h1>
        <h2 className="font-medium text-center p-4 fade-in-text">
          Software Engineer | UX Designer
        </h2>
      </div>
    </section>
  );
};

export default Banner;
