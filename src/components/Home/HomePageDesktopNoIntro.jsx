"use client"

import React, { useState } from 'react'
import { motion, useAnimation, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect} from "react";
import HomeHeader from './HomeHeader';
import HomeSocialsSection from './HomeSocialsSection';
import HomeBioSection from './HomeBiosSection';
import HomeButtonsSection from './HomeButtonsSection';

const HomePageDesktopNoIntro = () => {

    // where in the page certain things happen
    // const headerScrollBreakpoint = 0.05;
    // const socialsBreakpoint = 0.4;
    // const headerScrollDistance = 0.35;
    // const bioOpacityDistance = 0.05;
    // const scrollingBuffer = 0.02;

    const headerScrollBreakpoint = 0.03;
    const headerScrollDistance = 0.12;

    const socialsBreakpoint = 0.2;
    const bioOpacityDistance = 0.05;
    const scrollingBuffer = 0.02;

    // store aria-hidden states
    const [socialsHidden, setSocialsHidden] = useState(true);
    const [headerButtonsHidden, setHeaderButtonsHidden] = useState(false);
    const [bottomButtonsHidden, setBottomButtonsHidden] = useState(true);





    // init controls for diff parts of the page
    const headerControls = useAnimation();
    const buttonControls = useAnimation();
    const socialsControls = useAnimation();

    // scroll behaviors
    const {scrollYProgress} = useScroll();

    const headerDefaultY = "-80%";
    const headerX = useTransform(scrollYProgress, [headerScrollBreakpoint, headerScrollBreakpoint + headerScrollDistance], ["-50%", "-175%"]);
    const headerY = useTransform(scrollYProgress, [headerScrollBreakpoint, headerScrollBreakpoint + headerScrollDistance], [headerDefaultY, "-90%"]);
    const headerScale = useTransform(scrollYProgress, [headerScrollBreakpoint, headerScrollBreakpoint + headerScrollDistance], [1, 0.7]);
    const titleScale = useTransform(scrollYProgress, [headerScrollBreakpoint, headerScrollBreakpoint + headerScrollDistance], [1.4, 1.1]);

    // bio section
    const bioOpacity = useTransform(scrollYProgress, [(headerScrollBreakpoint + headerScrollDistance - scrollingBuffer - bioOpacityDistance), (headerScrollBreakpoint + headerScrollDistance - scrollingBuffer)], [0, 1]);
    const bioPointerEvents = useTransform(bioOpacity, latest => latest === 1 ? "auto" : "none" );



    useEffect(() => {
        // always mount at top of page
        // it's possible this logic should go in another element
        window.scrollTo({top : 0, behavior : "auto"});

    }, []);

    
    // hard code the scrolling behavior
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // buttons controls
        if (latest > headerScrollBreakpoint) {
            buttonControls.start({
                opacity : 0,
                pointerEvents : "none",
                transition : {duration : 0.3}
            })
            setHeaderButtonsHidden(true);
            setBottomButtonsHidden(false);

        } else {
            // might want to make this an else if latest < headerScrollBreakpoint + little_wiggle_room
            buttonControls.start({
                opacity : 1,
                pointerEvents : "auto",
                transition : {duration : 0.5}
            });

            setHeaderButtonsHidden(false);
        }


        // for socials
        if (latest > socialsBreakpoint) {
            socialsControls.start({
                opacity : 1,
                transition : { duration : 0.3 },
                pointerEvents : "auto",

            });

            setSocialsHidden(false);

        } else {
            socialsControls.start({
                opacity : 0,
                transition : {duration : 0.1},
                pointerEvents : "none",

            });

            setSocialsHidden(true);

        }

    });

    function navToTop() {
        window.scrollTo({top : 0, behavior : "smooth"});
    }


    return (
      <main className='relative w-screen flex flex-col'>

        {/* HEADER */}
        <div className='relative border'>
            <motion.div
                animate={headerControls}
                initial={{
                    scale : 1,
                    y : headerDefaultY,
                }}
                style={{
                    position : "fixed",
                    top : "50%",
                    left : "50%",
                    x : headerX,
                    y : headerY,
                    scale : headerScale
                }}
                className="z-30 transform-gpu will-change-transform"
            >
                <div className='actual-header flex items-center justify-center cursor-pointer' onClick={navToTop}>
                    <HomeHeader titleScale={titleScale} />
                </div>

                <motion.div
                    initial={{opacity : 0,  }}
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
                </motion.div>

            </motion.div>
        </div>

        <motion.div
            initial={{
                scale : 1,
                y : "110%",
                opacity : 1,
                pointerEvents : "auto",
            }}
            animate={buttonControls}
            aria-hidden={headerButtonsHidden}
            inert={headerButtonsHidden} 
            className="fixed flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform z-30"
        >
            <HomeButtonsSection />
        </motion.div>

        {/* MAIN CONTENT AFTER SCROLL -- BIO SECTION */}
        <section className="absolute top-0 left-0 w-full flex justify-center pr-32 pt-32">

            {/* LEFT SIDEBAR SPACING */}
            <div className='stupid-centering-agent w-1/3'/>

            {/* RIGHT COLUMN, MAIN CONTENT BIO SECTION  */}
            <motion.div
                style={{
                    opacity : bioOpacity,
                    pointerEvents: bioPointerEvents
                }}
                id="bio-section"
                className="w-1/2  p-8 mt-[84vh]"
            >
                <HomeBioSection buttonsHidden={bottomButtonsHidden} />
            </motion.div>

        </section>
        
      </main>
    )
}

export default HomePageDesktopNoIntro
