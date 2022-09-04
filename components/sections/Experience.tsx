import React, { RefObject } from "react";

import FadeInSection from "../animation/FadeInSection";
import TimelineDetail from "../../components/sections/sub-section/TimelineDetail";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Experience = ({ ref }: Props) => {
  return (
    <FadeInSection>
      <section id="experience" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card p-4 md:p-6 lg:p-8 xl:p-16 2xl:p-20">
          {/* Experience section */}
          <h3 className="sub-header">Experience</h3>
          <div className="flex items-center justify-center py-10">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol className="relative border-l-4 border-green-ocean-green leading-loose">
                <TimelineDetail
                  timePeriod={["2022"]}
                  title="PayPal"
                  subtitle="Software Engineer"
                  subtitleTwo="Singapore"
                  description="Full-stack developer in the Global Compliance - User Experience team."
                />
                <TimelineDetail
                  timePeriod={["2022", "2021"]}
                  title="M1 Limited"
                  subtitle="Software Engineer"
                  subtitleTwo="Singapore"
                  description="Worked in the integration team to build and enhance software systems and components within the company, migrating legacy codebases to a modern tech stack as well as integrating new components."
                />
                <TimelineDetail
                  timePeriod={["2021"]}
                  title="Realtec"
                  subtitle="IT Business Analyst"
                  subtitleTwo="Singapore"
                  description="Provided technical consultations to the company for the creation of an e-commerce website tailored to the Engineering industry and spearheaded the requirements gathering and design process."
                />
              </ol>
            </div>
          </div>
          {/* Education section */}
          <h3 className="sub-header">Education</h3>
          <div className="flex items-center justify-center py-10">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol className="relative border-l-4 border-green-ocean-green leading-loose">
                <TimelineDetail
                  timePeriod={["2021", "2018"]}
                  title="Monash University"
                  subtitle="Bachelor of Information Technology"
                  subtitleTwo="Melbourne, Australia"
                  description="Major in Software Development, Minor in Game Design"
                />
                <TimelineDetail
                  timePeriod={["2015", "2012"]}
                  title="Singapore Polytechnic"
                  subtitle="Associate's Degree in Mechanical Engineering"
                  subtitleTwo="Singapore"
                  description="Machine design specialisation"
                />
              </ol>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Experience;
