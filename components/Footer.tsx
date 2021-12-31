import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black mt-auto p-2">
      <div className="flex">
        <div className="flex-1 font-sans text-ocean-green motion-safe:animate-pulse text-left ml-10">
          Website by <strong>Kevin Tan</strong>
        </div>
        <div className="flex-1 text-right text-3xl text-illuminating-emerald">
          <a href="https://www.linkedin.com/in/kevintyh/" className="px-8">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/relyzer" className="mr-10">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
