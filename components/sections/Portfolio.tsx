import React, { RefObject } from "react";
import Link from "next/link";

import { ForwardLink } from "../elements/button";
import FadeInSection from "../animation/FadeInSection";
import Project from "./sub-section/Project";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Portfolio = ({ ref }: Props) => {
  const placeholderArr = [];
  return (
    <FadeInSection>
      <section id="portfolio" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">Portfolio</h2>

          <Project
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            snapshotUrl="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1401&q=80"
            techStack={placeholderArr}
          />
        </div>
        <ForwardLink href="#contact" />
      </section>
    </FadeInSection>
  );
};

export default Portfolio;
