import React, { RefObject } from "react";

import FadeInSection from "../animation/FadeInSection";
import { ProjectDetail } from "./sub-section";
import { projectArr } from "../../model/projectData"

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Portfolio = ({ ref }: Props) => {

  return (
    <FadeInSection>
      <section id="portfolio" ref={ref} className="section">
        <div className="card p-4 md:p-6 lg:p-8 xl:p-16 2xl:p-20">
          <h3 className="sub-header">Portfolio</h3>
          <ProjectDetail arr={projectArr} />
        </div>
      </section>
    </FadeInSection>
  );
};

export default Portfolio;
