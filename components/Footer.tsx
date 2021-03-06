import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import useSound from "use-sound";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-dark-jungle-green mt-auto p-2">
      <div className="flex flex-row items-center">
        <span className="flex-1 text-ocean-green motion-safe:animate-pulse text-left text-xs sm:text-base leading-4 md:leading-8 pl-8">
          Website by <strong>Kevin Tan</strong>
        </span>
        <span className="flex-1 text-right text-2xl lg:text-3xl">
          <Link href="https://www.linkedin.com/in/kevintyh/" passHref={true}>
            <a className="mr-8 icon" aria-label="Kevin's Linkedin profile">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Link>
          <Link href="https://github.com/relyzer" passHref={true}>
            <a className="mr-10 icon" aria-label="Kevin's Github profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
