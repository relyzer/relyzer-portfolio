import React from "react";
import Image from "next/image";
import FadeInSection from "../animation/FadeInSection";

const About = () => {
  return (
    <FadeInSection>
      <section id="about" className="section md:flex">
        <div className="flex flex-row card overflow-clip">
          <div className="md:relative md:flex md:items-center md:flex-1 md:basis-1/3">
            <figure className="md:absolute md:w-[30vw] xl:w-[30vw] 2xl:w-[25vw] md:left-0">
              <Image
                className="rounded-r-full"
                src="/me.jpg"
                alt="An image of Kevin Tan"
                width={300}
                height={300}
                layout="responsive"
              ></Image>
            </figure>
          </div>
          <div className="md:basis-2/3 flex flex-col p-4 md:p-3 lg:p-8 xl:p-16 2xl:p-20">
            <h3 className="sub-header">About</h3>
            <p className="px-4 py-2 leading-relaxed font-semibold">
              Hello, I'm <u>Kevin</u>.
            </p>
            <p className="px-4 py-2 leading-relaxed">
              An IT graduate with professional experience in full-stack software
              engineering. <br />
              My interests lies in web, mobile, mixed reality and games development.
              <br /> <br />
              Previously I was a mechanical engineering polytechnic student who
              cultivated a passion for technology whilst fiddling with iOS
              programming - leading to a decision to enroll for a tech degree.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
export default About;
