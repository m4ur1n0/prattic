"use client"
import { AnimatePresence, useScroll, useTransform, motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import HomeButtonSection from "./HomeButtonSection";
import HomeHeader from "./HomeHeader";
import HomeBioSection from "./HomeBioSection";
import StaticHomeButtonSection from "../StaticHomeButtonSection";

const HomeDesktop = () => {
  const [shouldAnimate, setShouldAnimate] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

//   const scrollRef = useRef(null);
  const { scrollY } = useScroll();

  // Always call these hooks
  const rawHeaderScale = useTransform(scrollY, [0, 200], [1, 0.7]);
  const rawHeaderX = useTransform(scrollY, [0, 200], ["0%", "-200%"]);
  const rawButtonsOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const headerScale = animationComplete ? rawHeaderScale : 1;
  const headerX = animationComplete ? rawHeaderX : "0%";
  const buttonsOpacity = animationComplete ? rawButtonsOpacity : 1;

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("hasAnimated") === "true";
    if (!hasAnimated) {
      sessionStorage.setItem("hasAnimated", "true");
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
      setAnimationComplete(true);
    }
  }, []);

  if (shouldAnimate === null) return null;

  return (shouldAnimate ? (
    <motion.div className="home-content-full w-full h-screen flex flex-col items-center justify-center"  
        transition={{duration: 0.5, ease: "easeInOut"}} // maybe delete
      >

        {/* ANIMATE HEADER */}
        
        <motion.div
          layout
          initial={{scale : 0.8}}
          animate={{scale : 1}}
          transition={{duration : 0.8, ease : "easeInOut", delay : 0.5}}
          className="z-10"
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <HomeHeader />
        </motion.div>

        {/* Animate presence allows us to animate the introduction of new DOM trees */}
        <AnimatePresence>

          {animationComplete && (

            <HomeButtonSection />

          )}

        </AnimatePresence>



      </motion.div>
  ) : (
    <div className="home-content-full w-full h-screen flex flex-col items-center justify-center">
      <HomeHeader />

      {/* <section className="flex flex-col gap-8 md:gap-8 mt-5 h-full">
        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
        <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />
      </section> */}
      {/* <HomeButtonSection /> */}
      <StaticHomeButtonSection />

    </div>
  )

)};

export default HomeDesktop;
