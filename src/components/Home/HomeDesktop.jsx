"use client"
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';
import React from 'react'
import HomeButtonSection from './HomeButtonSection';
import HomeHeader from './HomeHeader';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeBioSection from './HomeBioSection';


const HomeDesktop = () => {

    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);
    // const scrollRef = useRef(null); // using a ref over useScroll() to have finer grain over per-element render based on scroll

    //-----------------------------------------------------------------------------------------------------------
    // TEMPORARY FIX -- remove once homeMobile works!!!!
    const scrollRef = useRef(null);

    const { scrollY } = useScroll();

    // const headerScale = useTransform(scrollY, [0, 0.2], [1, 0.7]);
    // const headerX = useTransform(scrollY, [0, 0.2], ["0%", "-200%"]);
    // const buttonsOpacity = useTransform(scrollY, [0, 0.1], [1, 0]);

    const headerScale = animationComplete
        ? useTransform(scrollY, [0, 0.2], [1, 0.7])
        : 1;
    const headerX = animationComplete
        ? useTransform(scrollY, [0, 0.2], ['0%', '-200%'])
        : '0%';
    const buttonsOpacity = animationComplete
        ? useTransform(scrollY, [0, 0.1], [1, 0])
        : 1;

    //-----------------------------------------------------------------------------------------------------------


    // let's get animating the about section
        // frankly if !shouldAnimate, then we don't even wanna get into this shit, yea?
    // UNCOMMENT ONCE TEMP FIX NO LONGER NECESSARY
    // const { scrollY } = useScroll({
    //     target: scrollRef,
    //     offset : ["start start", "end start"]
    // });


    useEffect(() => {
      const hasAnimated = sessionStorage.getItem('hasAnimated') === "true";

      if (!hasAnimated) {
        sessionStorage.setItem("hasAnimated", true);
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
        setAnimationComplete(true);
      }

    }, []);
    

    if (shouldAnimate === null) {
      return null;
    }

    


    return (
        <div ref={scrollRef} className="relative w-screen min-h-[200vh]">
            {/* left column, sticky header, maintains logo */}
            <div className='sticky top-0 h-screen flex items-center justify-center w-full z-10'>
                <motion.div
                    style={{
                        scale : headerScale,
                        x : headerX
                    }}
                >
                    {
                        shouldAnimate ? (

                            <motion.div
                                layout
                                initial={{scale : 0.8}}
                                animate= {{scale : 1}}
                                transition={{duration : 0.8, ease : "easeInOut", delay : 0.5}}
                                onAnimationComplete={() => setAnimationComplete(true)}
                            >
                                <HomeHeader />
                            </motion.div>

                        ) : (

                            <HomeHeader />

                        )
                    }
                </motion.div>
            </div>

            {/* buttons */}
            <div className=' flex flex-col items-center justify-center '>
                {
                    shouldAnimate ? (

                        <AnimatePresence>
                            {
                                animationComplete && (
                                    <motion.section
                                        layout
                                        key="forward-buttons-section"
                                        initial={{opacity : 0, y : 20}}
                                        animate={{opacity : 1, y : 0}}
                                        exit={{opacity : 0, y : -20}}
                                        transition={{duration : 0.5, delay : 1.5}}
                                        style={{opacity : buttonsOpacity}}
                                        className="flex flex-col gap-8 md:gap-8 mt-5"
                                    >
                                        <HomeButtonSection />
                                    </motion.section>
                                )
                            }
                        </AnimatePresence>

                    ) : (

                        <motion.div style={{opacity : buttonsOpacity}}>
                            <HomeButtonSection />
                        </motion.div>

                    )
                }
            </div>

            {/* right column, scrolls, bio n shit */}
            <div className='w-full mt-[100vh]'>
                <HomeBioSection />
            </div>

        </div>
    )


    // return (shouldAnimate ? (
    //     <motion.div className="home-content-full w-full h-screen flex flex-col items-center justify-center"  
    //         transition={{duration: 0.5, ease: "easeInOut"}} // maybe delete
    //       >
  
    //         {/* ANIMATE HEADER */}
            
    //         <motion.div
    //           layout
    //           initial={{scale : 0.8}}
    //           animate={{scale : 1}}
    //           transition={{duration : 0.8, ease : "easeInOut", delay : 0.5}}
    //           className="z-10"
    //           onAnimationComplete={() => setAnimationComplete(true)}
    //         >
    //           <HomeHeader />
    //         </motion.div>
  
    //         {/* Animate presence allows us to animate the introduction of new DOM trees */}
    //         <AnimatePresence>
  
    //           {animationComplete && (
    //             <motion.section
    //               layout
    //               key="forward-buttons-section"
    //               initial={{opacity : 0, y : 20}}
    //               animate={{opacity : 1, y : 0}}
    //               exit={{opacity : 0, y: -20}}
    //               transition={{duration : 0.5, delay : 1.5}}
    //               className="flex flex-col gap-8 md:gap-8 mt-5 h-full"
    //             >
  
    //               <HomeButtonSection />
  
    //             </motion.section>
  
    //           )}
  
    //         </AnimatePresence>
  
  
  
    //       </motion.div>
    //   ) : (
    //     <div className="home-content-full w-full h-screen flex flex-col items-center justify-center">
    //       <HomeHeader />
  
    //       <HomeButtonSection />
  
    //     </div>
    //   )
  
    // )
}

export default HomeDesktop
