import React from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className="absolute z-10 top-0 left-0 h-screen p-4 md:p-6 bg-brunswick-green hamburger-menu">
      <nav className="flex flex-col justify-center p-4 h-full">
        <Link href="/#about">
          <a className="flex justify-center text-lg p-4">About</a>
        </Link>
        <Link href="/#experience">
          <a className="flex justify-center text-lg p-4">Experience</a>
        </Link>
        <Link href="/#portfolio">
          <a className="flex justify-center text-lg p-4">Portfolio</a>
        </Link>
        <Link href="/#contact">
          <a className="flex justify-center text-lg p-4">Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
