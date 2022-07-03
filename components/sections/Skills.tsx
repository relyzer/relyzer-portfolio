import React, { RefObject } from "react";

import {
  programmingArr,
  frontendArr,
  backendArr,
  mobileArr,
  designArr,
  devOpsArr,
  othersArr,
} from "../../model/skillData";
import { SkillDetail } from "./sub-section";
import FadeInSection from "../animation/FadeInSection";
import { LinkButton } from "../elements/button/";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Skills = ({ ref }: Props) => {
  return (
    <FadeInSection>
      <section id="skill" ref={ref} className="section">
        <div className="w-auto h-auto flex flex-col card p-4 md:p-6 lg:p-8 xl:p-16 2xl:p-20">
          <h3 className="sub-header">Skills</h3>
          <div className="skills-content">
            <SkillDetail
              arr={programmingArr}
              skillTitle="Programming languages"
            />
            <SkillDetail
              arr={frontendArr}
              skillTitle="Front-end Technologies"
            />
            <SkillDetail arr={backendArr} skillTitle="Back-end Technologies" />
            <SkillDetail arr={mobileArr} skillTitle="Mobile App Technologies" />
            <SkillDetail arr={designArr} skillTitle="UI / UX Design" />
            <SkillDetail
              arr={devOpsArr}
              skillTitle="DevOps / Cloud / Testing"
            />
            <SkillDetail arr={othersArr} skillTitle="Others" />
          </div>
          <div className="pt-4 xl:pt-8 flex justify-center">
            <LinkButton
              text="View my certificates"
              passHref={false}
              linkUrl={"/certificates"}
            />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;
