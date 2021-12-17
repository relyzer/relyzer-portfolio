import React from "react";

const Header = () => {
  return (
    <header>
      <div className="p-2 rounded-b-3xl bg-black shadow-xl">
        <nav className="w-full h-full text-center font-medium text-lg align-middle">
          <a href="#about" className="header-links">About</a><a href="#experience" className="header-links">Experience</a><a href="#portfolio" className="header-links">Portfolio</a><a href="#contact" className="header-links">Contact</a>
        </nav>
      </div>
    </header>
  );
};

/*  <a href="/api/users">Contact</a> */
export default Header;
