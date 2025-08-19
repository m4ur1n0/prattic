"use client"

import React from 'react'
import { motion, useAnimation, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";
import HomeHeader from './HomeHeader';
import HomeSocialsSection from './HomeSocialsSection';
import HomeBioSection from './HomeBiosSection';

const HomePageDesktop = () => {

    // where in the page certain things happen
    const headerScrollBreakpoint = 0.05;
    const socialsBreakpoint = 0.4;

    // init controls for diff parts of the page
    const headerControls = useAnimation();
    const buttonControls = useAnimation();
    const socialsControls = useAnimation();

    // scroll behaviors
    const {scrollYProgress} = useScroll();

    const headerX = useTransform(scrollYProgress, [headerScrollBreakpoint, 0.4], ["-50%", "-200%"]);
    const headerY = useTransform(scrollYProgress, [headerScrollBreakpoint, 0.4], ["-100%", "-70%"]);
    const headerScale = useTransform(scrollYProgress, [headerScrollBreakpoint + 0.15, 0.4], [1, 0.7]);

    // bio section
    const bioOpacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);


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
                y : "-80%",
                transition : {duration : 0.8, ease : "easeInOut", delay : 0.5}
            });


            // fade buttons in
            await buttonControls.start({
                scale : 1,
                y : "120%",
                opacity : 1,
                transition : {duration : 0.6}
            });
        }


        runIntro();
    }, [headerControls]);

    
    // hard code the scrolling behavior
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // buttons controls
        if (latest > headerScrollBreakpoint) {
            buttonControls.start({
                opacity : 0,
                transition : {duration : 0.3}
            })
        } else {
            // might want to make this an else if latest < headerScrollBreakpoint + little_wiggle_room
            buttonControls.start({
                opacity : 1,
                transition : {duration : 0.5}
            });
        }


        // for socials
        if (latest > socialsBreakpoint) {
            socialsControls.start({
                opacity : 1,
                transition : { duration : 0.3 }
            });

        } else {
            socialsControls.start({
                opacity : 0,
                transition : {duration : 0.3}
            });
        }
    });


    return (
      <main className='relative w-screen h-[250vh] bg-background overflow-hidden flex flex-col'>

        {/* HEADER */}
        <div className='relative'>
            <motion.div
                animate={headerControls}
                style={{
                    position : "fixed",
                    top : "50%",
                    left : "50%",
                    x : headerX,
                    y : headerY,
                    scale : headerScale
                }}
            >
                <div className='actual-header flex items-center justify-center'>
                    <HomeHeader />
                </div>

                <motion.div
                    initial={{opacity : 0}}
                    animate={socialsControls}
                    className="text-gray-700 mt-8 w-full text-center text-2xl"
                    style={{
                        position : "absolute",
                        top : "100%"
                    }}
                >
                    <HomeSocialsSection />
                </motion.div>

            </motion.div>
        </div>

        <motion.div
            initial={{opacity : 0, y : "20%"}}
            animate={buttonControls}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            
        </motion.div>

        {/* MAIN CONTENT AFTER SCROLL -- BIO SECTION */}
        <section className="absolute top-0 left-0 w-full h-full flex pt-32">

            {/* LEFT SIDEBAR SPACING */}
            <div className='stupid-centering-agent w-1/3'/>

            {/* RIGHT COLUMN, MAIN CONTENT BIO SECTION  */}
            <motion.div
                style={{opacity : bioOpacity}}
                className="w-1/2 bg-gray-50 shadow-lg p-8 mt-[50vh]"
            >
                <HomeBioSection />
            </motion.div>

        </section>




        
      </main>
    )
}

export default HomePageDesktop
