import React, { forwardRef, RefObject } from "react";
import Image from "next/image";
import FadeInSection from "../animation/FadeInSection";

type Props = {
  // ref?: RefObject<HTMLInputElement>;
};

const About = ({}: Props) => {
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
            Kevin @ Melbourne, 2019
          </figcaption>
        </div>
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">About Me</h2>
          <h4 className="px-4 pt-4 leading-10 font-semibold text-3xl">
            Hey there, I'm <u>Kevin</u>.<br />I enjoy designing and creating digital products!
          </h4>
          <p className="px-4 pb-4 leading-7">
            <br />
            An IT graduate with professional full-stack software engineering experience in the area of web application development.
            Previously, I was a mechanical engineering student who developed a passion for technology through tinkering with iOS programming. It led to my decision to enroll for a tech degree!
            <br /> <br />
            Check out some of the projects I have created!
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};
export default About;
