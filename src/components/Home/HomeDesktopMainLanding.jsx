import React from 'react'
import { motion, useMotionTemplate } from 'framer-motion';
import HomeHeader from './HomeHeader';
import HomeButtonSection from './HomeButtonSection';
import { AnimatePresence } from 'framer-motion';
import StaticHomeButtonSection from './StaticHomeButtonSection';


const HomeDesktopMainLanding = ({ shouldAnimate, headerScale, headerX, rawButtonsOpacity, renderButtons, headerMoved, bioSectionPresent }) => {
    // Use useMotionTemplate for transform
    const headerTransform = useMotionTemplate`scale(${headerScale}) translateX(${headerX})`;
    return shouldAnimate ? (
        <motion.div className="relative home-content-full w-full border flex flex-col items-center" transition={{ duration: 0.5, ease: "easeInOut" }}>
            {/* Fixed header, animates scale and X on scroll */}
            <motion.div
                className="z-10"
                style={{
                    position: "fixed",
                    left: headerX,
                    top: 0,
                    width: "40vw",
                    transform: headerTransform,
                }}
            >
                <HomeHeader />
            </motion.div>
            {/* Buttons fade out as you scroll */}
            <AnimatePresence>
                {renderButtons && (
                    <motion.div
                        style={{ opacity: rawButtonsOpacity }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 top-[350px] w-[40vw] flex justify-center"
                    >
                        <HomeButtonSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    ) : (
        <div className="home-content-full w-full h-screen flex flex-col items-center justify-center">
            <div
                className="z-10"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "40vw",
                }}
            >
                <HomeHeader />
            </div>
            <div className="absolute left-0 top-[350px] w-[40vw] flex justify-center">
                <StaticHomeButtonSection />
            </div>
        </div>
    );
};

export default HomeDesktopMainLanding
