"use client"
import { AnimatePresence, useScroll, useTransform, motion, delay } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import HomeButtonSection from "./HomeButtonSection";
import HomeHeader from "./HomeHeader";
import HomeBioSection from "./HomeBioSection";
import StaticHomeButtonSection from "../StaticHomeButtonSection";
import HomeDesktopMainLanding from "./HomeDesktopMainLanding";

const HomeDesktop = () => {
    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    //   const scrollRef = useRef(null);
    const { scrollY } = useScroll();

    // Always call these hooks
    const rawHeaderScale = useTransform(scrollY, [0, 200], [1, 0.7]);
    const rawHeaderX = useTransform(scrollY, [0, 200], ["0%", "-200%"]);
    const rawButtonsOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const rawBioOpacity = useTransform(scrollY, [50, 200], [0, 1]);

    const headerScale = animationComplete ? rawHeaderScale : 1;
    const headerX = animationComplete ? rawHeaderX : "0%";
    // const buttonsOpacity = animationComplete ? rawButtonsOpacity : 1;
    const scrollButtonsPresent = animationComplete ? rawButtonsOpacity : 1;
    const [renderButtons, setRenderButtons] = useState(true);

    const [bioSectionPresent, setBioSectionPresent] = useState(false);

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("hasAnimated") === "true";
        if (!hasAnimated) {
        sessionStorage.setItem("hasAnimated", "true");
        setShouldAnimate(true);
        } else {
        setShouldAnimate(false);
        setAnimationComplete(true);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = rawButtonsOpacity.on("change", (latest) => {
            if (latest <= 0) {
                // we've hit breakpoin
                setRenderButtons(false);

                delay(1000);

                setBioSectionPresent(true);

            }

            if (latest > 0 && !renderButtons) {

                setBioSectionPresent(false);

                delay(200);

                setRenderButtons(true);


            }
        });
        return () => unsubscribe();
    }, [rawButtonsOpacity, renderButtons]);

    

    if (shouldAnimate === null) return null;


    return (
            
        <motion.main className="relative home-page-full-container flex justify-center w-screen min-h-[200vh] md:px-[20%] border border-4 border-black"
            layout
            transition={{duration: 1, ease: "easeInOut"}} // maybe delete

        >
            {/* <motion.div className="" */}
            <HomeDesktopMainLanding animationComplete={animationComplete} shouldAnimate={shouldAnimate} rawButtonsOpacity={rawButtonsOpacity} renderButtons={renderButtons} setAnimationComplete={setAnimationComplete} bioSectionPresent={bioSectionPresent} />

            <AnimatePresence className=''
            
            >

                {
                    (bioSectionPresent) && (
                        <HomeBioSection />
                    )
                }

            </AnimatePresence>

        </motion.main>

    )

};

export default HomeDesktop;
