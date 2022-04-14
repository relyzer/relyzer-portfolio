import React, { useState, useEffect } from "react";
import Link from "next/link";

import { SoundButton, MuteButton } from "./elements/button";

// To-do: Apply responsive designs to links and buttons!

type Props = {
  width: number;
};

const Header = ({ width }: Props) => {
  const [enableSound, setEnableSound] = useState(false);
  const onMuteClick = () => {
    if (enableSound) {
      // If true, set to false
      setEnableSound(false);
    } else {
      setEnableSound(true);
    }
  };

  return (
    <div className="flex flex-row bg-green-turquoise-green justify-center w-full drop-shadow-lg">
      <div className="lg:basis-1/2"></div>
      <div className="lg:basis-1/2 align-middle text-right flex items-center lg:justify-end">
        <nav className="flex flex-row z-10 lg:basis-1/2 xl:basis-1/3 p-2 w-full h-full text-center font-medium text-base lg:text-lg 2xl:text-xl align-middle space-x-6 md:space-x-12">
          <Link href="/#about">
            <a className="link hover-link transition-colors">
              <SoundButton name="About" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/#experience">
            <a className="link hover-link transition-colors">
              <SoundButton name="Experience" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/#portfolio">
            <a className="link hover-link transition-colors">
              <SoundButton name="Portfolio" isSoundEnabled={enableSound} />
            </a>
          </Link>
          <Link href="/certificates">
            <a className="link hover-link transition-colors">
              <SoundButton name="Certificates" isSoundEnabled={enableSound} />
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
