"use client";

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Scene1 from "../components/Scene1/Scene1";
import Scene2 from "../components/Scene2/Scene2";
import { useLenis } from "../contexts/LenisContext";
import styles from "./home.module.scss";
import RevealTextBlur from "../components/RevealTextBlur/RevealTextBlur";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Recommendations from "../components/Recommendations/Recommendations";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import FadeInSection from "../components/FadeInSection/FadeInSection";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

export default function Home() {
  const lenis = useLenis();
  const circleRef = useRef<SVGCircleElement>(null);
  const page2ContentRef = useRef<HTMLDivElement>(null);
  const longWrapperRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);

  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (!page2ContentRef.current || !longWrapperRef.current) return;

    const updateHeight = () => {
      const contentHeight = page2ContentRef.current!.scrollHeight;
      const viewportHeight = window.innerHeight;
      longWrapperRef.current!.style.height = `${viewportHeight + contentHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!lenis || !circleRef.current) return;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      if (!circleRef.current) return;

      const viewportHeight = window.innerHeight;

      const progress = Math.min(scroll / viewportHeight, 1);
      const page = Math.floor(scroll / viewportHeight);
      if (currentPageRef.current !== page) {
        currentPageRef.current = page;
        setCurrentPage(page);
      }

      console.log("progress:", progress);
      console.log("currentPage:", page);

      // Transition from page 0 to page 1
      if (page === 0) {
        const radius = progress * 90;
        circleRef.current.setAttribute("r", `${radius}%`);
        if (page2ContentRef.current) {
          page2ContentRef.current.style.transform = `translateY(0px)`;
        }
      }

      // Scroll the second page content
      if (page >= 1) {
        circleRef.current.setAttribute("r", `90%`);
        if (page2ContentRef.current) {
          const innerScroll = scroll - viewportHeight;
          page2ContentRef.current.style.transform = `translateY(-${innerScroll}px)`;
        }
      }
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
      <div ref={longWrapperRef} className={styles.longWrapper}>
        <div className={styles.stickyWrapper}>
          {/* page 1 */}
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
                  <RevealTextBlur
                    text="creative technologist"
                    delay={4}
                    staggeringDelay={0.1}
                  />
                </div>
              </div>
            </div>
            <Scene1 />
            <ScrollIndicator />
          </div>

          {/* page 2 */}
          <div className={classNames(styles.page, styles.page2)}>
            <div ref={page2ContentRef} className={styles.page2Content}>
              <div className={styles.page2ContentInner}>
                <AboutMe />
                <FadeInSection>
                  <Skills />
                </FadeInSection>
                <FadeInSection>
                  <Education />
                </FadeInSection>
                <FadeInSection>
                  <Recommendations />
                </FadeInSection>
                <FadeInSection>
                  <Contact />
                </FadeInSection>
              </div>
            </div>
            <Scene2 />
          </div>
        </div>
      </div>
    </>
  );
}
