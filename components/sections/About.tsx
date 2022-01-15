import React, { RefObject } from "react";
import Image from "next/image";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const About = ({ ref }: Props) => {
  // const nextRef = useRef<null | HTMLDivElement>(null);
  // const executeScroll = () => nextRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="about"
      ref={ref}
      className="section md:flex" /* ref={forwardedRef} */
    >
      <div className="md:flex-none p-2 sm:p-3 md:p-8 lg:p-12 md:self-center">
        <figure className="">
          <Image
            className="rounded-full"
            src="/me.jpg"
            alt=""
            width={400}
            height={400}
            layout="responsive"
          ></Image>
        </figure>
        <figcaption className="text-center pt-3">
          Picture taken in Melbourne 😀
        </figcaption>
      </div>
      <div className="w-auto h-auto flex-auto card">
        <h2 className="sub-header">About Me</h2>
        <h3 className="px-4 pt-4">
          Hey there, thanks for taking the time to look at my website!
        </h3>
        <p className="px-4 pb-4">
          I am <strong>Kevin</strong>, and I enjoy the feeling of designing and
          creating my very own digital products. <br /> <br />
          I have been interested in tech since young. <br /> <br />
          From figuring out how to install and play StarCraft 1 at 3 years old,
          to adding widgets and simple scripts to my blogspot site in my youth.{" "}
          <br />
          As a mechanical engineering student back in 2013, I was intrigued with
          the idea of developing my own iOS mobile app and being able to call it
          my creation. <br />
          The ability to create a functioning product with a computer,
          fascinates me more so than mechanical engineering, which requires
          physical components to assemble a prototype. It feels like wielding
          magic!
          <br />
          That was how my true journey into tech began - by installing Xcode and
          tinkering with iOS programming. It eventually led to my decision to
          enroll for a tech degree out of passion, while serving the military.
          <br />
          Now equipped with a formal education in tech and some professional
          backend development, coupled with strong design skills and an
          analytical mindset, I became more confident (and competent) in
          creating amazing products.
          <br />
          Check out some of the projects I have created!
        </p>
      </div>
    </section>
  );
};

// export default forwardRef(About);
export default About;
