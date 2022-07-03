import React from "react";
import Image from "next/image";
import FadeInSection from "../animation/FadeInSection";
import profilePicture from "../../public/me.jpg";

const About = () => {
  return (
    <FadeInSection>
      <section id="about" className="section md:flex">
        <div className="flex flex-row card overflow-clip">
          <div className="hidden md:relative md:flex md:items-center md:flex-1 md:basis-1/3">
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
            <figure className="p-4 md:hidden">
              <Image
                className="rounded-full"
                src={profilePicture}
                alt="An image of Kevin Tan"
                width={300}
                height={300}
                layout="responsive"
                placeholder="blur"
              ></Image>
            </figure>
            <p className="px-4 py-2 md:mt-2 leading-relaxed text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-tight">
              Hello, I'm{" "}
              <span className="text-green-medium-spring-green">Kevin</span>.
            </p>
            <p className="px-4 py-2 leading-relaxed tracking-tight">
              An Information Technology graduate with professional experience in
              full-stack software engineering and knowledge in UX design
              fundamentals. <br /> <br />
              With interests in web, mobile, mixed reality and games
              development, I strive to become a T-shaped developer who follows
              the best software engineering practices - delivering{" "}
              <span className="text-green-medium-spring-green">
                clean
              </span>,{" "}
              <span className="text-green-medium-spring-green">efficient</span>{" "}
              and{" "}
              <span className="text-green-medium-spring-green">resilient</span>{" "}
              code.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
export default About;
