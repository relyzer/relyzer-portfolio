import React from "react";

import { Experience, Education } from "../../interfaces/experience";
import ExperienceDetail from "./sub-section/ExperienceDetail";
import { ForwardButton } from "../elements/button";

const Experience = () => {
  const experienceArr: Experience[] = [
    {
      company: "M1 Limited",
      location: "Singapore",
      title: "Software Engineer",
      duration: "Mar 2021 - Present",
    },
    {
      company: "Realtec Pte. Ltd.",
      location: "Singapore",
      title: "IT Business Analyst",
      duration: "Dec 2020 - Mar 2021",
    },
  ];

  const educationArr: Education[] = [
    {
      school: "Monash University",
      location: "Melbourne, Australia",
      course: "Bachelor of Information Technology",
      detail: "Major in Software Development, Minor in Game Design",
    },
  ];
  return (
    <section id="experience" className="section">
      <div className="w-auto h-auto flex-auto card">
        {/* Experience section */}
        <h2 className="sub-header">Experience</h2>
        {experienceArr.map((job: Experience) => (
          <ExperienceDetail
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
            title={edu.school}
            subTitle={edu.location}
            detail={edu.course}
            subDetail={edu.detail}
          />
        ))}
      </div>
      {/* <ForwardButton href="#skill" /> */}
    </section>
  );
};

export default Experience;
