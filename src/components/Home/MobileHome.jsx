"use client"

import React, { useEffect, useState, useRef } from 'react'
import HomePageMobile from './HomePageMobile';
import {motion, useAnimationControls, useScroll} from 'framer-motion'
import HomeBioSection from './HomeBiosSection';

const MobileHome = () => {

    

    const {scrollY} = useScroll();

    const cardControls = useAnimationControls();
    const bioControls = useAnimationControls();

    const [locked, setLocked] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(0);


    const triggerPoint = 200; // px to scroll b4 trigger anim
    const triggered = useRef(false);

    useEffect(() => {
        setMounted(true);
        setViewportHeight(window.innerHeight);

    }, []);

    useEffect(() => {

        const unsubscribe = scrollY.on("change", async (y) => {

            if (locked) return;

            // scrolling down
            if (y >= triggerPoint && !triggered.current) {
                // do the scroll locking
                triggered.current = true;
                setLocked(true);
                document.body.style.overflow = "hidden";
                // window.scrollTo({top : triggerPoint, behavior : "auto"}); // freeze

                await cardControls.start({
                    y : "-120%",
                    opacity : 0,
                    transition : {duration : 0.6, ease : "easeInOut"}
                });

                await bioControls.start({
                    opacity : 1,
                    scale : 1,
                    transition : {duration : 0.6, ease : "easeOut"}
                });

                // unlock the scroll
                document.body.style.overflow="";
                // window.scrollTo({top : (2 * viewportHeight) + (viewportHeight * 0.2)});
                setLocked(false);
            }

            if (y < triggerPoint && triggered.current) {
                // going back up

                triggered.current = false;
                setLocked(true);
                document.body.style.overflow = "hidden";
                // window.scrollTo({top : triggerPoint, behavior : "auto"});

                await bioControls.start({
                    opacity : 0,
                    scale : 0.8,
                    transition : {duration : 0.5, ease : "easeIn"}
                });

                await cardControls.start({
                    opacity : 1,
                    y : "0%",
                    transition : {duration : 0.6, ease : "easeInOut"}
                });


                // 8unlok
                document.body.style.overflow = "";
                // window.scrollTo({top : 0, behavior : "smooth"});
                setLocked(false);

            }

        })

        return () => {
            unsubscribe();
            document.body.style.overflow = "";
            // setLocked(false);
        }

    }, [scrollY, cardControls, bioControls, locked]);



    if (!mounted) return null;





    return (
        <main className='home-main relative flex flex-col'>

            <motion.div className="card-slide fixed top-0 left-0 w-full h-dvh items-center justify-center"
                style={{boxShadow : '8px 8px 8px rgb(0, 0, 0, 0.3)'}}
                initial={{y : "0%", opacity : 1}}
                animate={cardControls}
            >
                <div>
                    <HomePageMobile />
                </div>
            </motion.div>

            <div className="h-[70vh]" />

            <motion.section className='bio-section z-10 mb-5'
                // style={{opacity : bioOpacity, scale : bioScale}}
                initial={{opacity : 0, scale : 0.9}}
                animate={bioControls}

            >
                <HomeBioSection />
            </motion.section>


        </main>
    )
}

export default MobileHome
