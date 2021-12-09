import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Kevin Tan">
    <div className="">
      <h1 className="font-extrabold text-center">Kevin Tan</h1>
      <h3 className="font-medium">Software Engineer</h3>
    </div>
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hey there! Thanks for taking the time to look at my website.<br></br>
        My name is Kevin, and I enjoy designing and creating digital products
        using technology.<br></br>
        Since young, I possessed an innocent, inquisitive mind towards tech.
        From figuring out how to install and play StarCraft 1 at 3 years old, to
        adding widgets and simple scripts for my blogspot site at 13 years old
        <br></br>
        <br></br>
        My first real foray into programming began in 2013 while I was a
        mechanical engineering student, whereby I downloaded Xcode (Apple's IDE)
        and attempted to learn iOS programming on my own, to create an iOS
        mobile app. <br></br>
        However, due to school commitments, other interests and a lack of a
        formal learning environment for programming, I did not accomplish much
        from that curious endeavour. <br></br>
        Nevertheless, that interest never waned until during my military
        service, where I decided that I would enroll for a tech degree in
        university.
      </p>
    </div>
    <div id="experience">
      <h2>Experience</h2>
      <p>I worked at...</p>
    </div>
    <div id="portfolio">
      <h2>Portfolio</h2>
      <p>
        Take a look at my{" "}
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        !
      </p>
    </div>
    <div id="contact">
      <h2>Contact</h2>
      <p>You can contact me through - </p>
    </div>
  </Layout>
);

export default IndexPage;
