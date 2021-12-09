import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="w-full h-full text-center font-medium text-lg">
        <a href="#about">About</a> | <a href="#experience">Work experience</a> |{" "}
        <a href="#portfolio">Portfolio</a> | <a href="#contact">Contact</a>
        {/*  <a href="/api/users">Contact</a> */}
      </nav>
    </header>
  );
};

export default Header;
