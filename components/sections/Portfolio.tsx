import React, { RefObject } from "react";
import Link from "next/link";

import { ForwardLink } from "../elements/button";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Portfolio = ({ ref }: Props) => {
  return (
    <section id="portfolio" ref={ref} className="section">
      <div className="w-auto h-auto flex-auto card">
        <h2 className="sub-header">Portfolio</h2>
        <p className="p-4">
          Take a look at my{" "}
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>
          !
        </p>
      </div>
      <ForwardLink href="#contact" />
    </section>
  );
};

export default Portfolio;
