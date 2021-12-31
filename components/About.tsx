import React, { useRef } from "react";
import Image from "next/image";

const About = () => {
  const nextRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    nextRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="section md:flex">
      <div className="block md:flex-none p-2 sm:p-3 md:p-8 lg:p-12 md:self-center">
        <figure className="">
          <Image src="/me.jpg" alt="" width={400} height={400}></Image>
        </figure>
        <figcaption className="text-center">
          Picture taken in Melbourne 😀
        </figcaption>
      </div>
      <div className="w-auto h-auto flex-auto card">
        <h2 className="sub-header">About Me</h2>
        <p className="p-4">
          Hey there, thanks for taking the time to look at my website!
          <br />
          My name is <strong>Kevin</strong>, and I enjoy designing and creating
          digital products.
          <br />
          Since young, I have been interested in tech.
          From figuring out how to install and play StarCraft 1 at 3 years old,
          to adding widgets and simple scripts for my blogspot site at 13 years
          old
          <br />
          <br />
          My first foray into programming began in 2013 while I was a mechanical
          engineering student. <br />
          With intentions to create an iOS mobile application, I downloaded
          Xcode and attempted to learn iOS programming. <br />
          Having discovered that passion, I made the decision during my military
          service to enroll for a tech degree in university.
          <br />
        </p>
        <button onClick={executeScroll} className="next-button">
          Next
        </button>
      </div>
    </section>
  );
};

export default About;
