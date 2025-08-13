"use client"

import React, { useEffect, useState } from 'react'
import HomeHeader from "@/components/HomeHeader";
import StaticSketchedButton from "@/components/StaticSketchedButton";
import { AnimatePresence, motion } from "framer-motion";

const HomePageContent = () => {

    // const {homePageVisited, setHomePageVisited} = useAnimationC();
    // const {homePageVisited, setHomePageVisited} = useAnimationC();
    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
      const hasAnimated = sessionStorage.getItem('hasAnimated') === "true";

      if (!hasAnimated) {
        sessionStorage.setItem("hasAnimated", true);
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
        setAnimationComplete(true);
      }

    }, [])

    if (shouldAnimate === null) {
      return null;
    }




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
              <motion.section
                layout
                key="forward-buttons-section"
                initial={{opacity : 0, y : 20}}
                animate={{opacity : 1, y : 0}}
                exit={{opacity : 0, y: -20}}
                transition={{duration : 0.5, delay : 1.5}}
                className="flex flex-col gap-8  md:gap-8 mt-5 h-full"
              >

                <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
                <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />

              </motion.section>

            )}

          </AnimatePresence>



        </motion.div>
    ) : (
      <div className="home-content-full w-full h-screen flex flex-col items-center justify-center">
        <HomeHeader />

        <section className="flex flex-col gap-8 md:gap-8 mt-5 h-full">
          <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
          <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />
        </section>

      </div>
    )

  )
}

export default HomePageContent
