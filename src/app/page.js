"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "./styles/work.css";
import React, { useEffect, useState } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  // const [vlineHeight, setvlineHeight] = useState(70);
  // const [vlineHeight2, setvlineHeight2] = useState(0);
  // const [hlineWidth, sethlineWidth] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate the new height based on the scroll position
  //     const newHeight = Math.max(70 - window.scrollY, 0);
  //     const Height = Math.max(70 - window.scrollY, 0);
  //     const newHeight2 = ((window.scrollY-100)<70)?0:window.scrollY-100;
  //     const newWidth = Math.max(window.scrollY, 0);
  //     setvlineHeight(newHeight);
  //     setvlineHeight2(newHeight2);
  //     sethlineWidth(newWidth);
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Empty

  const main = useRef(null);
  const work = useRef(null); 
  const skills = useRef(null); 
  const edu = useRef(null); 

  
  useEffect(() => {
     
    gsap.to(work.current, {
      scrollTrigger: {
        trigger: work.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        toggleClass: { targets: work.current, className: "z-index-active" },
      }
    });

    gsap.to(skills.current, {
      scrollTrigger: {
        trigger: skills.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        toggleClass: { targets: skills.current, className: "z-index-active" },
      }
    });

    gsap.to(edu.current, {
      scrollTrigger: {
        trigger: edu.current,
        start: "top top",
        end: "top center",
        pin: true,
        pinSpacing: false,
        toggleClass: { targets: edu.current, className: "z-index-active" },
      }
    });

  }, []); // Empty

  // useLayoutEffect(() => {

  //   ScrollTrigger.create({
  //     trigger: work.current, // Access the DOM element using current property
  //     start: 'top top',
  //     end: 'bottom top',
  //     scrub: true,
  //     scroller: main.current,
  //   });
  // }, []);

  return (
    <>
      <main ref={main} className={styles.main}>
        <section className={styles.hero}>
          {/* <span className={styles.hline} style={{ height: `${vlineHeight}vh` }}></span>
          <span className={styles.vline} style={{ width: `${hlineWidth}vw` }}></span>
          <span className={styles.hline2} style={{ height: `${vlineHeight2}vh` }}></span> */}

          <h1>SHEHARYAR SAEED</h1>
          <marquee className={styles.title} direction="left">
            <span>Web developer</span>
            <span>•</span>
            <span>Graphic Designer</span>
          </marquee>
        </section>

        <section ref={work} className={styles.work}>
          <h1>work</h1>
        </section>

        <section ref={skills} className={styles.skills}>
          <h1>skills</h1>
        </section>

        <section ref={edu} className={styles.edu}>
          <h1>education</h1>
        </section>
      </main>
    </>
  );
}
