import React, { useState } from "react";
import Link from "next/link";

import { SoundButton, MuteButton } from "./elements/button";

// To-do: Apply responsive designs to links and buttons!

const Header = () => {
  const [enableSound, setEnableSound] = useState(true);
  const onMuteClick = () => {
    if (enableSound) {
      // If true, set to false
      setEnableSound(false);
    } else {
      setEnableSound(true);
    }
  };
  return (
      <div className="flex flex-row rounded-b-3xl bg-black w-full">
        <div className="basis-1/3"></div>
        <nav className="basis-1/3 p-2 w-full h-full text-center font-medium text-lg align-middle space-x-8 lg:space-x-12">
          <Link href="#about">
            <a className="header-links">
              <SoundButton name="About" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="#experience">
            <a className="header-links">
              <SoundButton name="Experience" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="#portfolio">
            <a className="header-links">
              <SoundButton name="Portfolio" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="#contact">
            <a className="header-links">
              <SoundButton name="Contact" isSoundEnabled={enableSound} />
            </a>
          </Link>
        </nav>
        <div className="basis-1/3 align-middle text-right">
          <MuteButton handleMute={onMuteClick} className="mr-6 p-2 text-lg text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors" isSoundEnabled={enableSound} />
        </div>
      </div>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
