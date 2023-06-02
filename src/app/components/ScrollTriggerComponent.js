import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollTriggerComponent = ({ children }) => {
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: scrollTriggerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    });
  }, []);

  return <div ref={scrollTriggerRef}>{children}</div>;
};

export default ScrollTriggerComponent;