import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const AdvancedHeadlineEffect = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString("Full Stack Developer.")
      .pauseFor(100)
      .deleteAll()
      .typeString("Fronted Developer.")
      .pauseFor(100)
      .start();
  }, []);

  return <div ref={typewriterRef} style={{ fontSize: "3rem", textAlign: "start"  }} />;
};

export default AdvancedHeadlineEffect;
