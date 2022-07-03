import React, { useState, useEffect, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import PropTypes from "prop-types";

const AnimatedBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "0x#52ffb8",
          color2: "0x#52ffb8",
          backgroundColor: "0x#081c15",
          size: 4.8,
          spacing: 60.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}>{children}</div>;
};

AnimatedBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedBackground;
