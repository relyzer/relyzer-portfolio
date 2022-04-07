import React, { useState, useEffect } from "react";
import Link from "next/link";

import { SoundButton, MuteButton, HamburgerButton } from "./elements/button";
import { HamburgerMenu } from "./elements/container";

// To-do: Apply responsive designs to links and buttons!

type Props = {
  width: number;
};

const Header = ({ width }: Props) => {
  const [enableSound, setEnableSound] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const onMuteClick = () => {
    if (enableSound) {
      // If true, set to false
      setEnableSound(false);
    } else {
      setEnableSound(true);
    }
  };

  const onHamburgerButtonClick = () => {
    if (!openHamburger) {
      setOpenHamburger(true);
    } else {
      setOpenHamburger(false);
    }
  };

  useEffect(() => {
    // Disables scrolling when hamburger menu is open
    if (openHamburger) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openHamburger]);

  return (
    <div className="flex flex-row rounded-b-3xl bg-black w-full">
      {width > 1023 && (
        <>
          <div className="lg:basis-1/4 xl:basis-1/3"></div>
          <nav className="lg:basis-2/4 xl:basis-1/3 p-2 w-full h-full text-center font-medium text-base lg:text-lg 2xl:text-xl align-middle space-x-8 lg:space-x-12">
            <Link href="/#about">
              <a className="w-auto h-auto align-middle text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors">
                <SoundButton name="About" isSoundEnabled={enableSound} />
              </a>
            </Link>
            <Link href="/#experience">
              <a className="w-auto h-auto align-middle text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors">
                <SoundButton name="Experience" isSoundEnabled={enableSound} />
              </a>
            </Link>
            <Link href="/#portfolio">
              <a className="w-auto h-auto align-middle text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors">
                <SoundButton name="Portfolio" isSoundEnabled={enableSound} />
              </a>
            </Link>
            <Link href="/#contact">
              <a className="w-auto h-auto align-middle text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors">
                <SoundButton name="Contact" isSoundEnabled={enableSound} />
              </a>
            </Link>
          </nav>
          <div className="lg:basis-1/4 xl:basis-1/3 align-middle text-right flex flex-row-reverse items-center">
            <MuteButton
              handleMute={onMuteClick}
              className="mr-6 p-2 text-base lg:text-lg 2xl:text-xl text-ocean-green-two motion-safe:animate-pulse hover:text-turquoise-green transition-colors"
              isSoundEnabled={enableSound}
            />
          </div>
        </>
      )}
      {width < 1024 && (
        <>
          <div className="basis-5/6"></div>
          <div className="flex basis-1/6 justify-center">
            <HamburgerButton handleOnClick={onHamburgerButtonClick} />
            {openHamburger && <HamburgerMenu />}
          </div>
        </>
      )}
    </div>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
