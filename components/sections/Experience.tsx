import React, { RefObject } from "react";

import { Experience, Education } from "../../interfaces/experience";
import ExperienceDetail from "./sub-section/ExperienceDetail";
import { ForwardLink } from "../elements/button";
import FadeInSection from "../animation/FadeInSection";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Experience = ({ ref }: Props) => {
  const experienceArr: Experience[] = [
    {
      id: generateUniqueID(),
      company: "M1 Limited",
      location: "Singapore",
      title: "Software Engineer",
      duration: "Mar 2021 - Present",
    },
    {
      id: generateUniqueID(),
      company: "Realtec Pte. Ltd.",
      location: "Singapore",
      title: "IT Business Analyst",
      duration: "Dec 2020 - Mar 2021",
    },
  ];

  const educationArr: Education[] = [
    {
      id: generateUniqueID(),
      school: "Monash University",
      location: "Melbourne, Australia",
      course: "Bachelor of Information Technology",
      detail: "Major in Software Development, Minor in Game Design",
    },
    {
      id: generateUniqueID(),
      school: "Singapore Polytechnic",
      location: "Singapore",
      course: "Associate's Degree in Mechanical Engineering",
      detail: "",
    },
  ];
  return (
    <FadeInSection>
      <section id="experience" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          {/* Experience section */}
          <h2 className="sub-header">Experience</h2>
          {experienceArr.map((job: Experience) => (
            <ExperienceDetail
              key={job.id}
              title={job.company}
              subTitle={job.location}
              detail={job.title}
              subDetail={job.duration}
            />
          ))}
          {/* Education section */}
          <h2 className="sub-header">Education</h2>
          {educationArr.map((edu: Education) => (
            <ExperienceDetail
              key={edu.id}
              title={edu.school}
              subTitle={edu.location}
              detail={edu.course}
              subDetail={edu.detail}
            />
          ))}
        </div>
        <ForwardLink href="#skill" title="skills" />
      </section>
    </FadeInSection>
  );
};

export default Experience;
