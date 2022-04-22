import React, { useState, useEffect } from "react";
import Link from "next/link";

import { SoundButton, MuteButton } from "./elements/button";

type Props = {
  width: number;
};

// Reference: https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
// For scroll direction

const Header = ({ width }: Props) => {
  const [enableSound, setEnableSound] = useState(false);
  const [isScrollDown, setScrollDown] = useState(false);

  const onMuteClick = () => {
    setEnableSound(!enableSound);
    if (window) {
      window.sessionStorage.setItem("soundMute", `${enableSound}`);
    }
  };

  useEffect(() => {
    if (window) {
      const muteOption = window.sessionStorage.getItem("soundMute");
      if (muteOption === "true") {
        setEnableSound(false);
      } else {
        setEnableSound(true);
      }
    }
  }, []);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      if (scrollY > lastScrollY) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(isScrollDown);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollDown]);

  return (
    <div
      className={`flex flex-row fixed bg-green-dark-jungle-green justify-center w-full z-20 opacity-80 ${
        isScrollDown ? "hide-header" : "show-header"
      }`}
    >
      <div className="lg:basis-1/2"></div>
      <div className="lg:basis-1/2 align-middle text-right flex items-center lg:justify-end">
        <nav className="flex flex-row z-10 lg:basis-1/2 xl:basis-1/3 p-2 w-full h-full text-center font-medium text-base lg:text-lg 2xl:text-xl align-middle space-x-6 md:space-x-12">
          <Link href="/#about">
            <a className="font-sans link hover-link transition-colors">
              <SoundButton name="About" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/#experience">
            <a className="font-sans link hover-link transition-colors">
              <SoundButton name="Experience" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/#skill">
            <a className="font-sans link hover-link transition-colors">
              <SoundButton name="Skills" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/#portfolio">
            <a className="font-sans link hover-link transition-colors">
              <SoundButton name="Portfolio" isSoundEnabled={enableSound} />
            </a>
          </Link>
        </nav>
        {width > 1023 && (
          <MuteButton
            handleMute={onMuteClick}
            className="py-2 px-6 text-base lg:text-lg 2xl:text-xl text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors"
            isSoundEnabled={enableSound}
          />
        )}
      </div>
    </div>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
