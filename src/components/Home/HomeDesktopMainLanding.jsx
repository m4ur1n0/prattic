

import React from 'react'
import { motion } from 'framer-motion';
import HomeHeader from './HomeHeader';
import HomeButtonSection from './HomeButtonSection';
import { AnimatePresence } from 'framer-motion';
import StaticHomeButtonSection from '../StaticHomeButtonSection';


const HomeDesktopMainLanding = ({ animationComplete, shouldAnimate, setAnimationComplete, rawButtonsOpacity, renderButtons, bioSectionPresent}) => {

    

  return (shouldAnimate ? (
    <motion.div className="relative home-content-full border flex flex-col items-center justify-center max-h-screen"  

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
    <div className="home-content-full  flex flex-col items-center justify-center max-h-screen">
        <div className=''
          style={{
            position : bioSectionPresent ? "fixed" : "relative",
            top : '0%',
            width : "100%",
          }}
        >
          <HomeHeader />
        </div>


      <AnimatePresence>
        { renderButtons &&
          (<motion.div style={{opacity : rawButtonsOpacity}} exit={{opacity : 0}}>
            <StaticHomeButtonSection />
          </motion.div>)
        }
      </AnimatePresence>

    </div>
  )

)};

export default HomeDesktopMainLanding
