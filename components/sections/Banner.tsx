import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import DOTS from "vanta/dist/vanta.dots.min";

const Banner = () => {

  const [vantaEffect, setVantaEffect]: [any, any] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#52ffb8",
          color2: "#52ffb8",
          backgroundColor: "#081c15",
          size: 3.6,
          spacing: 42.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  
  return (
    <section /* ref={vantaRef} */ className="flex relative justify-center items-center -mt-12 h-screen p-2 sm:p-6 md:p-20 rounded-b-xl">
      <div className="absolute h-screen w-full">
        <div ref={vantaRef} className="fixed h-screen w-full"></div>
      </div>
      <div className="relative -mt-12 bg-green-dark-jungle-green/90 sm:p-2 rounded-3xl z-10">
        <div className="absolute atom-spinner atom-position fade-in-text">
          <div className="spinner-inner">
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-circle">&#9679;</div>
          </div>
        </div>
        <h1 className="text-center p-2 text-light-up">Kev&#305;n Tan</h1>
        <h2 className="text-center p-4 text-light-up-two">
          Software Engineer
        </h2>
        <div className="absolute left-0 right-0 w-0 m-auto mt-20 lg:mt-24 xl:mt-32 2xl:mt-40">
          <span className="flex flex-row justify-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            <Link href="https://www.linkedin.com/in/kevintyh/" passHref={true}>
              <a
                className="px-4 lg:px-5 xl:px-6 2xl:px-8 icon fade-in-text"
                aria-label="Kevin's Linkedin profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
            <Link href="https://github.com/relyzer" passHref={true}>
              <a
                className="px-4 lg:px-5 xl:px-6 2xl:px-8 icon fade-in-text"
                aria-label="Kevin's Github profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
