import React, { useRef } from "react";
import Image from "next/image";

const About = () => {
  const nextRef = useRef<null | HTMLDivElement>(null)
  const executeScroll = () => nextRef.current.scrollIntoView({behavior: 'smooth'});

  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hey there! Thanks for taking the time to look at my website.
        <br />
        My name is Kevin, and I enjoy designing and creating digital products
        using technology.
        <br />
        Since young, I possessed an innocent, inquisitive mind towards tech.
        From figuring out how to install and play StarCraft 1 at 3 years old, to
        adding widgets and simple scripts for my blogspot site at 13 years old
        <br />
        <br />
        My first real foray into programming began in 2013 while I was a
        mechanical engineering student. <br />
        I downloaded Xcode (Apple's IDE) and attempted to learn iOS programming
        on my own, to create an iOS mobile app. <br />
        My interest in coding never waned and after serious consideration during
        my military service, I decided that I would enroll for a tech degree in
        university.
      </p>
      <button onClick={executeScroll} className="next-button">Next</button>
    </section>
  );
};

export default About;
