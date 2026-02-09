"use client";

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Scene1 from "../components/Scene1/Scene1";
import Scene2 from "../components/Scene2/Scene2";
import { useLenis } from "../contexts/LenisContext";
import styles from "./home.module.scss";
import RevealTextBlur from "../components/RevealTextBlur/RevealTextBlur";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
  const lenis = useLenis();
  const circleRef = useRef<SVGCircleElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);

  useEffect(() => {
    if (!lenis || !circleRef.current) return;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      if (!circleRef.current) return;

      const viewportHeight = window.innerHeight;

      // Progress from 0 to 1 over the first 100vh of scroll
      const progress = Math.min(scroll / viewportHeight, 1);
      const page = Math.floor(scroll / viewportHeight);
      if (currentPageRef.current !== page) {
        currentPageRef.current = page;
        setCurrentPage(page);
      }

      console.log("progress:", progress);
      console.log("currentPage:", page);

      // Calculate radius as percentage (0 to 150 for full coverage)
      const radius = progress * 90;

      circleRef.current.setAttribute("r", `${radius}%`);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <>
      <div className={styles.svgContainer}>
        <svg className={styles.svg}>
          <filter id="noise" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              seed="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="200" />
          </filter>

          <mask
            id="reveal-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r="0"
              fill="white"
              filter="url(#noise)"
            />
          </mask>
        </svg>
      </div>
      <div className={styles.longWrapper}>
        <div className={styles.stickyWrapper}>
          <div className={classNames(styles.page, styles.page1)}>
            <div className={styles.page1Content}>
              <div>
                <div className={styles.page1Text1}>
                  <RevealTextBlur
                    text="Aleksandar Timic"
                    delay={1}
                    staggeringDelay={0.1}
                  />
                </div>
                <div className={styles.page1Text2}>
                  <RevealTextBlur
                    text="frontend developer"
                    delay={3}
                    staggeringDelay={0.1}
                  />
                </div>
              </div>
            </div>
            <Scene1 />
          </div>
          <div className={classNames(styles.page, styles.page2)}>
            <div className={styles.page2Content}>
              <div className={styles.page2ContentInner}>
                {currentPage === 1 && <AboutMe />}
              </div>
            </div>
            <Scene2 />
          </div>
        </div>
      </div>
    </>
  );
}
