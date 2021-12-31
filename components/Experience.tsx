import React from "react";

import { Experience, Education } from "../interfaces/experience";

const Experience = () => {
  const experienceArr: Experience[] = [
    {
      company: "M1 Limited",
      title: "Software Engineer",
      duration: "Mar 2021 - Present",
    },
    {
      company: "Realtec Pte. Ltd.",
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
        <div className="p-4">
          {experienceArr.map((job: Experience) => {
            return (
              <>
                <h3 className="leading-8 flex justify-between">
                  <strong>{job.company}</strong>
                  <span className="text-right">{job.duration}</span>
                </h3>
                <h4 className="leading-8">{job.title}</h4>
                <br />
              </>
            );
          })}
        </div>
        {/* Education section */}
        <h2 className="sub-header">Education</h2>
        <div className="p-4">
          {educationArr.map((edu: Education) => {
            return (
              <>
                <h3 className="leading-8 flex justify-between">
                  <strong>{edu.school}</strong>
                  <span className="text-right">{edu.location}</span>
                </h3>
                <p className="leading-8 flex justify-between">
                  {edu.course}
                  <span className="text-right">{edu.detail}</span>
                </p>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
