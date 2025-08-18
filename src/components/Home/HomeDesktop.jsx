"use client"
import { AnimatePresence, useScroll, useTransform, motion, delay } from "framer-motion";
import React, { useState, useEffect } from "react";
import HomeButtonSection from "./HomeButtonSection";
import HomeHeader from "./HomeHeader";
import HomeBioSection from "./HomeBioSection";
import StaticHomeButtonSection from "./StaticHomeButtonSection";
import HomeDesktopMainLanding from "./HomeDesktopMainLanding";

const HomeDesktop = () => {
    // Animation state
    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [bioSectionPresent, setBioSectionPresent] = useState(false);
    const [headerMoved, setHeaderMoved] = useState(false);
    const [renderButtons, setRenderButtons] = useState(true);

    // Scroll hooks
    const { scrollY } = useScroll();
    const headerScale = useTransform(scrollY, [0, 200], [1, 0.7]);
    const headerX = useTransform(scrollY, [0, 200], ["0%", "-200%"]);
    const rawButtonsOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    // Track when header finishes moving (scrollY >= 200)
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            if (latest >= 200 && !headerMoved) {
                setHeaderMoved(true);
                setTimeout(() => {
                    setBioSectionPresent(true);
                }, 1000); // 1s delay after header finishes moving
            }
            if (latest < 200 && headerMoved) {
                setHeaderMoved(false);
                setBioSectionPresent(false);
            }
            // Buttons fade out as you scroll
            if (latest >= 100 && renderButtons) {
                setRenderButtons(false);
            }
            if (latest < 100 && !renderButtons) {
                setRenderButtons(true);
            }
        });
        return () => unsubscribe();
    }, [scrollY, headerMoved, renderButtons]);

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("hasAnimated") === "true";
        if (!hasAnimated) {
            sessionStorage.setItem("hasAnimated", "true");
            setShouldAnimate(true);
        } else {
            setShouldAnimate(false);
        }
    }, []);

    if (shouldAnimate === null) return null;

    return (
        <motion.main className="relative home-page-full-container flex w-screen min-h-[200vh] md:px-[40%] border border-4 border-black" layout>
            <HomeDesktopMainLanding
                shouldAnimate={shouldAnimate}
                headerScale={headerScale}
                headerX={headerX}
                rawButtonsOpacity={rawButtonsOpacity}
                renderButtons={renderButtons}
                headerMoved={headerMoved}
                bioSectionPresent={bioSectionPresent}
            />
            <AnimatePresence>
                {bioSectionPresent && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.8 }}
                        className="absolute right-0 top-0 h-full w-[40vw] flex items-center"
                    >
                        <HomeBioSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.main>
    );
};

export default HomeDesktop;
