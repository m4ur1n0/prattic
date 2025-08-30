"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState} from "react";
import HomeHeader from './HomeHeader';
import HomeSocialsSection from './HomeSocialsSection';
import HomeBioSection from './HomeBiosSection';
import HomeButtonsSection from './HomeButtonsSection';

const HomePageMobile = () => {

    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    // keep track of animation status
    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("hasAnimated") === "true";
        
        if (!hasAnimated) {
            console.log("ANIMATING");
            sessionStorage.setItem("hasAnimated", "true");
            setShouldAnimate(true);
        } else {
            setShouldAnimate(false);
            setAnimationComplete(true);
        }
    }, []);

    if (shouldAnimate === null) return null;

    return (shouldAnimate ? (
        <motion.section className="home-content-full w-full h-dvh max-h-dvh relative flex flex-col items-center justify-center pb-[5%] border-b-gray-800 rounded-[2vh]"  
            transition={{duration: 0.5, ease: "easeInOut"}} // maybe delete
          >
    
            {/* ANIMATE HEADER */}
            
            <motion.div
              layout
              initial={{scale : 0.8}}
              animate={{scale : 0.9}}
              transition={{duration : 0.8, ease : "easeInOut", delay : 0.5}}
              className="z-10 "
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              <HomeHeader />
            </motion.div>
    
            {/* Animate presence allows us to animate the introduction of new DOM trees */}
            <AnimatePresence>
    
              {animationComplete && (
                
                <motion.div
                    layout
                    initial={{y : "5%", opacity : 0}}
                    animate={{y : "0%", opacity : 1}}
                    transition={{duration : 0.5, delay : 1.3}}
                    className="z-10"
                >
                    <HomeButtonsSection />
                </motion.div>
    
              )}
    
            </AnimatePresence>
    
    
    
          </motion.section>
      ) : (
        <section className="home-content-full relative w-full max-h-dvh h-dvh flex flex-col items-center justify-center pb-[5%] border-b border-gray-800 rounded-b-[2vh]">
          <HomeHeader />
    
          {/* <section className="flex flex-col gap-8 md:gap-8 mt-5 h-full">
            <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
            <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />
          </section> */}
          {/* <HomeButtonSection /> */}
          {/* <StaticHomeButtonSection /> */}
          <HomeButtonsSection />
    
        </section>
      )  
        
    );
}

export default HomePageMobile
