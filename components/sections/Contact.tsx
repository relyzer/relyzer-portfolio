import React, { RefObject } from "react";
import FadeInSection from "../animation/FadeInSection";

type Props = {
  ref?: RefObject<HTMLInputElement>;
};

const Contact = ({ ref }: Props) => {
  return (
    <FadeInSection>
      <section id="contact" ref={ref} className="section">
        <div className="w-auto h-auto flex-auto card">
          <h2 className="sub-header">Contact</h2>
          <p className="p-4">You can reach me through - </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
