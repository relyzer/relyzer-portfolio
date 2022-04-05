import React from "react";
import Image from "next/image";
import FadeInSection from "../animation/FadeInSection";

const About = () => {
  return (
    <FadeInSection>
      <section id="about" className="section lg:flex">
        {/* Something wrong with the large breakpoint. Check the responsiveness for it again. */}
        <div className="lg:flex-none px-20 sm:p-18 md:px-24 md:py-4 md:mr-4 lg:p-1 lg:mr-10 md:self-center hovering-image">
          <figure className="lg:w-[20vw]">
            <Image
              className="rounded-full"
              src="/me.jpg"
              alt=""
              width={300}
              height={300}
              layout="responsive"
            ></Image>
          </figure>
          <figcaption className="font-medium text-center py-3">
            Kevin @ Melbourne, 2018
          </figcaption>
        </div>
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">About Me</h2>
          <h4 className="px-4 pt-4 leading-relaxed font-semibold">
            Hello, I'm <u>Kevin</u>.
          </h4>
          <h5 className="px-4 leading-relaxed">
            I love designing and creating digital products.
          </h5>
          <p className="px-4 pb-4 leading-relaxed">
            <br />
            An IT graduate with professional experience in full-stack software
            engineering.
            <br />
            I have interests in web, mobile, mixed reality and games
            development. <br />
            Previously, I was a mechanical engineering polytechnic student who
            developed a passion for technology while tinkering with iOS
            programming, leading to my decision to enroll for a tech degree.
            <br /> <br />
            Take a look at some projects I've created!
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};
export default About;
