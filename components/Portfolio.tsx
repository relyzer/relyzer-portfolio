import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
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
    </section>
  );
};

export default Portfolio;
