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
        <div className="w-auto h-auto flex-auto card p-4 md:p-6 lg:p-8 xl:p-16 2xl:p-20">
          <h3 className="sub-header">Skills</h3>
          <h4 className="text-center font-semibold p-4">
            Programming / Mark-up languages
          </h4>
          <SkillDetail arr={programmingArr} />

          <h4 className="text-center font-semibold p-4">
            Front-end Technologies
          </h4>
          <SkillDetail arr={frontendArr} />

          <h4 className="text-center font-semibold p-4">
            Back-end Technologies
          </h4>
          <SkillDetail arr={backendArr} />

          <h4 className="text-center font-semibold p-4">
            Mobile App Technologies
          </h4>
          <SkillDetail arr={mobileArr} />

          <h4 className="text-center font-semibold p-4">UI/UX Design</h4>
          <SkillDetail arr={designArr} />

          <h4 className="text-center font-semibold p-4">DevOps / Cloud</h4>
          <SkillDetail arr={devOpsArr} />

          <h4 className="text-center font-semibold p-4">Others</h4>
          <SkillDetail arr={othersArr} />

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
