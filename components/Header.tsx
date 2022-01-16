import React from "react";
import { SoundButton } from "./elements/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-auto">
      <div className="rounded-b-3xl bg-black w-full">
        <nav className="p-2 w-full h-full text-center font-medium text-lg align-middle space-x-8 lg:space-x-12">
          <Link href="#about">
            <a className="header-links">
              <SoundButton name="About" />
            </a>
          </Link>
          <Link href="#experience">
            <a className="header-links">
              <SoundButton name="Experience" />
            </a>
          </Link>
          <Link href="#portfolio">
            <a className="header-links">
              <SoundButton name="Portfolio" />
            </a>
          </Link>
          <Link href="#contact">
            <a className="header-links">
              <SoundButton name="Contact" />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
