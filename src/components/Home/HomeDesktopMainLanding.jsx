

import React from 'react'
import { motion } from 'framer-motion';
import HomeHeader from './HomeHeader';
import HomeButtonSection from './HomeButtonSection';
import { AnimatePresence } from 'framer-motion';
import StaticHomeButtonSection from '../StaticHomeButtonSection';


const HomeDesktopMainLanding = ({ animationComplete, shouldAnimate, setAnimationComplete, rawButtonsOpacity, renderButtons, bioSectionPresent}) => {

    

  return (shouldAnimate ? (
    <motion.div className="relative home-content-full w-full  border flex flex-col items-center "  
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
          style={{
            position : bioSectionPresent ? "fixed" : "relative",
            top : '0%',
            width : "100%",
          }}
        >
          <HomeHeader />
        </motion.div>

        {/* Animate presence allows us to animate the introduction of new DOM trees */}
        <AnimatePresence>

          {(animationComplete && renderButtons) ? (

            <motion.div style={{opacity : rawButtonsOpacity}} exit={{opacity : 0}}>
                <HomeButtonSection />
            </motion.div>

          ) : (
            null
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

export default HomeDesktopMainLanding
