import React, { RefObject } from "react";
import FadeInSection from "../animation/FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Contact = ({ ref }: Props) => {
  return (
    <FadeInSection>
      <section id="contact" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">Contact</h2>
          <p className="p-4">Reach me through: </p>
          <div className="flex flex-row flex-wrap text-6xl justify-center">
            <Link href="https://www.linkedin.com/in/kevintyh/" passHref={true}>
              <a className="motion-safe:hover:animate-pulse">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
