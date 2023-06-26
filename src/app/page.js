"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import "./styles/work.css";
import React, { useEffect, useState } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CircleCursor from "./components/CircleCursor";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";

import { LuGithub } from 'react-icons/lu';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';

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

  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    function handleMouseMove() {
      setMouseY(window.pageYOffset);
    }

    document.addEventListener("scroll", handleMouseMove);
    return () => {
      document.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMouseX(event.clientX);
  //     setMouseY(event.clientY);
  //   };
  // window.addEventListener('mousemove', handleMouseMove);

  //   const updateCursor = () => {
  //     setXp((prevX) => prevX + (mouseX - prevX) * 0.6);
  //     setYp((prevY) => prevY + (mouseY - prevY) * 0.6);
  //     requestAnimationFrame(updateCursor);
  //   };

  //   requestAnimationFrame(updateCursor);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [mouseX, mouseY]);

  useEffect(() => {
    const workList = gsap.utils.toArray(work.current.children);

    gsap.to(workList, {
      xPercent: -100 * (workList.length - 1),
      scrollTrigger: {
        trigger: work.current,
        // start: "top top",
        // end: "+=4000",
        scrub: 1,
        // snap:1/(workList.length-1),
        pin: true,
        end: () => "+=" + work.current.offsetWidth,
      },
    });

    // gsap.to(work.current, {
    //   scrollTrigger: {
    //     trigger: work.current,
    //     start: "top top",
    //     end: "bottom top",
    //     pin: true,
    //     pinSpacing: false,
    //     toggleClass: { targets: work.current, className: "z-index-active" },
    //   }
    // });

    gsap.to(skills.current, {
      scrollTrigger: {
        trigger: skills.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        toggleClass: { targets: skills.current, className: "z-index-active" },
      },
    });

    gsap.to(edu.current, {
      scrollTrigger: {
        trigger: edu.current,
        start: "top top",
        end: "top center",
        pin: true,
        pinSpacing: false,
        toggleClass: { targets: edu.current, className: "z-index-active" },
      },
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
      <CircleCursor />

      <main ref={main} className={styles.main}>
        <section className={styles.hero}>
          {/* <span className={styles.hline} style={{ height: `${vlineHeight}vh` }}></span>
          <span className={styles.vline} style={{ width: `${hlineWidth}vw` }}></span>
          <span className={styles.hline2} style={{ height: `${vlineHeight2}vh` }}></span> */}

          <h1
            style={{ transform: "translateX(" + Math.min(mouseY, 500) + "px)" }}
          >
            SHEHARYAR
          </h1>
          <h1
            style={{
              transform: "translateX(-" + Math.min(mouseY, 500) + "px)",
            }}
          >
            SAEED
          </h1>
          <marquee className={styles.title} direction="left">
            <span>Web developer</span>
            <span>•</span>
            <span>Graphic Designer</span>
          </marquee>
        </section>

        <section ref={work} className={styles.work}>
          <div className={styles.field}>
            <div className={styles.topic}>
              <h2>Web developer</h2>
              <p>
                Transform Your Online Presence with Simple and Effective Web
                Development Services
              </p>
              <span>
                <hr/>recents
              </span>
            </div>
            <div className={styles.detail}>
              <div>
              <FaReact size={26} />
                <p>
                  <b>Single Page</b> <br /> applications in React JS
                </p>
              </div>

              <div>
              <TbBrandNextjs size={26} />
                <p>
                  <b>SEO Optimized</b> <br /> web using Next JS
                </p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.list}>
                <div data-imgsha="true" className={styles.item_card}>
                  <Image src={web2} alt="web portfolio project 1" />
                  <div className={styles.Card_Det}>
                    <span>
                      <ul>
                        <li>next js</li>
                        <li>react</li>
                      </ul>
                    </span>
                    <Link href="/">GSA Accounts System</Link>
                  </div>
                </div>

                <div data-imgsha="true" className={styles.item_card}>
                  <Image src={web1} alt="web portfolio project 2" />
                  <div className={styles.Card_Det}>
                    <span>
                      <ul>
                        <li>react</li>
                        <li>python</li>
                        <li>flask</li>
                      </ul>
                    </span>
                    <Link href="/">Final Year Project</Link>
                  </div>
                </div>
              </div>
              <div className={styles.list}>

                <div data-imgsha="true"  className={`${styles.item_card}`}>
                <Image src={web3} alt="web portfolio project 3" />
                  <div className={styles.Card_Det}>
                  <span>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>PHP</li>
                      </ul>
                    </span>
                    <Link href="/">Vertiment <br />
                      E-Commerce</Link>
                  </div>
                </div>

                <div data-imgsha="true" className={` ${styles.item_card} ${styles.item_card2}`}>
                <Image src={web4} alt="web portfolio project 4" />
                  <div className={styles.Card_Det}>
                    <Link href="/">Bootstrap</Link>
                    <p>clone</p>
                  </div>
                </div>

                <div
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  className={`${styles.item_card} ${styles.item_card2}`}
                >
                  <div className={styles.Card_Det}>
                    <h3>Portfolio</h3>
                    <p>personal project</p>
                  </div>
                </div>
              <span>
                <hr />
                <Link href="/">
                  <LuGithub size={20} />
                  <small >Github</small>
                </Link>
              </span>
              </div>

            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.topic}>
              <h3>Graphic designer</h3>
              <p>
                Unleash the Artistry of Graphic Design to Elevate Your Brand's
                Visual Identity
              </p>
            </div>
            <div className={styles.detail}>Time</div>
            <div className={styles.items}>Items</div>
          </div>
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
