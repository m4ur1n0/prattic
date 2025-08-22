"use client"

import React from 'react'
import { motion, useAnimation, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useState} from "react";
import HomeHeader from './HomeHeader';
import HomeSocialsSection from './HomeSocialsSection';
import HomeBioSection from './HomeBiosSection';
import HomeButtonsSection from './HomeButtonsSection';

const HomePageMobile = () => {

    // init controls for diff parts of the page
    const headerControls = useAnimation();
    const buttonControls = useAnimation();
    const socialsControls = useAnimation();

    // scroll behaviors
    const {scrollYProgress} = useScroll();
    const headerDefaultY = "-80%";


    // always reload to page top
    useEffect(() => {
        // always mount at top of page
        // it's possible this logic should go in another element
        window.scrollTo({top : 0, behavior : "auto"});

    }, []);


    // INTRO ANIMATION
    useEffect(() => {
        async function runIntro() {
            // start with only header visible, centered
            await headerControls.start({
                scale : 0.8,
                opacity : 1,
                x : "-50%",
                y : "-50%",
                transition : {duration : 0}
            });

            // grow header to full size
            await headerControls.start({
                scale : 1,
                y : headerDefaultY,
                transition : {duration : 0.8, ease : "easeInOut", delay : 0.5}
            });


            // fade buttons in
            await buttonControls.start({
                scale : 1,
                y : "110%",
                opacity : 1,
                pointerEvents : "auto",
                ariaHidden : false,
                transition : {duration : 0.6}
            });
        }


        runIntro();
    }, [headerControls]);

    return (
        <main className='relative w-screen h-[500vh] flex flex-col'>
            {/* HEADER */}
            <div className='relative'>
                <motion.div
                    animate={headerControls}
                    style={{
                        position : "fixed",
                        top : "50%",
                        left : "50%",
                    }}
                    className="z-30 transform-gpu will-change-transform"
                >
                    <div className='actual-header flex items-center justify-center cursor-pointer'>
                        <HomeHeader  />
                    </div>

                    {/* <motion.div
                        initial={{opacity : 0, ariaHidden : true}}
                        animate={socialsControls}
                        aria-hidden={socialsHidden}
                        inert={socialsHidden}
                        className="text-gray-700 mt-5 w-full text-center text-2xl"
                        style={{
                            position : "absolute",
                            top : "100%"
                        }}
                    >
                        <HomeSocialsSection />
                    </motion.div> */}

                </motion.div>
            </div>

            <motion.div
                initial={{opacity : 0, y : "100%", pointerEvents : "none"}}
                animate={buttonControls}
                // aria-hidden={headerButtonsHidden}
                // inert={headerButtonsHidden}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform z-30"
            >
                <HomeButtonsSection />
            </motion.div>
        </main>
    )
}

export default HomePageMobile
