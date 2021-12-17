import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div id="portfolio" className="section">
      <h2>Portfolio</h2>
      <p>
        Take a look at my{" "}
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        !
      </p>
    </div>
  );
};

export default Portfolio;
