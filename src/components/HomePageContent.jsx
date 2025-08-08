"use client"

import React, { useEffect, useState } from 'react'
import HomeHeader from "@/components/HomeHeader";
import StaticSketchedButton from "@/components/StaticSketchedButton";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimationC } from '@/app/context/AnimationContext';

const HomePageContent = () => {

//   const {homePageVisited, setHomePageVisited} = useAnimationC();
    const {homePageVisited, setHomePageVisited} = useAnimationC();
    const [hasMounted, setHasMounted ] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, [])


    // useEffect(() => {

    //   // COULD STORE A TIMESTAMP IN SESSION STORAGE SO THAT AFTER X MINUTES WE MAKE THE ANIMATION PLAY AGAIN.

    //   const hasVisited = sessionStorage.getItem("hasSeenIntro") === "true";
    
    //   if (!hasVisited) {
    //       sessionStorage.setItem("hasSeenIntro", "true");
    //       const timer = setTimeout(() => {
    //           setHomePageVisited(true);
    //       }, 1500);
      
    //       return () => clearTimeout(timer);

    //   } else {
    //     setHomePageVisited(true);
    //   }

    // }, []);   

    // if (homePageVisited === null) {
    //   return null; // could return a loader here
    // }

    useEffect(() => {

      if (hasMounted && !homePageVisited) {
        const timer = setTimeout(() => {
            setHomePageVisited(true);
        }, 1500);

        return () => clearTimeout(timer);
      }

    }, [hasMounted, homePageVisited, setHomePageVisited])

    if (!hasMounted) {
      // Render a server-safe version that matches SSR output
      return (
        // <div className="home-content-full w-full h-screen flex flex-col items-center justify-center">
        //   <div className="z-10">
        //     <HomeHeader />
        //   </div>
        // </div>

        null
      );
    }



  return (
    <motion.div className="home-content-full w-full h-screen flex flex-col items-center justify-center"  
        layout
        transition={{duration: 0.8, ease: "easeInOut"}}
      >

        {/* ANIMATE HEADER */}
        
        <motion.div
          layout
          initial={homePageVisited ? false : {scale : 0.8}}
          animate={{
            scale : homePageVisited ? 1 : 0.8,
          }}
          transition={{duration : 0.8, ease : "easeInOut"}}
          className="z-10"
        >
          <HomeHeader />
        </motion.div>

        {/* Animate presence allows us to animate the introduction of new DOM trees */}
        <AnimatePresence>

          {homePageVisited && (
            <motion.section
              key="forward-buttons-section"
              layout
              initial={homePageVisited ? false : {opacity : 0, y : 20}}
              animate={{opacity : 1, y : 0}}
              exit={{opacity : 0, y: -20}}
              transition={{duration : 0.6, delay : 3}}
              className="flex flex-col gap-12 md:gap-10 mt-5 h-full"
            >

              <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
              <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />

            </motion.section>

          )}

        </AnimatePresence>



      </motion.div>
  )
}

export default HomePageContent
