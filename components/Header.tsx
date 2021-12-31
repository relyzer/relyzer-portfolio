import React from "react";
import SoundButton from "./SoundButton";

const Header = () => {
  return (
    <header className="w-auto">
      <div className="rounded-b-3xl bg-black w-full">
        <nav className="p-2 w-full h-full text-center font-medium text-lg align-middle space-x-8 lg:space-x-12">
          <a href="#about" className="header-links">
            <SoundButton name="About" />
          </a>
          <a href="#experience" className="header-links">
            <SoundButton name="Experience" />
          </a>
          <a href="#portfolio" className="header-links">
            <SoundButton name="Portfolio" />
          </a>
          <a href="#contact" className="header-links">
            <SoundButton name="Contact" />
          </a>
        </nav>
      </div>
    </header>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
