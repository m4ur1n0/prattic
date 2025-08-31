"use client"

import React, { useEffect, useState, useRef } from 'react'
import HomePageMobile from './HomePageMobile';
import {motion, useAnimationControls, useScroll} from 'framer-motion'
import HomeBioSection from './HomeBiosSection';

const MobileHome = () => {

    

    const {scrollYProgress} = useScroll();

    const cardControls = useAnimationControls();
    const bioControls = useAnimationControls();


    const [mounted, setMounted] = useState(false);
    const [bioPinned, setBioPinned] = useState(false);


    const triggerPoint = 200; // px to scroll b4 trigger anim
    const triggerProportion = 0.05;
    const triggered = useRef(false);
    const bioRef = useRef(null);

    const lockBodyScroll = () => {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
    };
    
    const unlockBodyScroll = () => {
        const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
    };

    useEffect(() => {
        setMounted(true);

    }, []);

    useEffect(() => {

        const unsubscribe = scrollYProgress.on("change", async (y) => {

            // scrolling down
            if (y >= triggerProportion && !triggered.current) {
                // do the scroll locking
                triggered.current = true;
                // document.body.style.overflow = "hidden";
                lockBodyScroll();

                await cardControls.start({
                    y : "-120%",
                    opacity : 0,
                    transition : {duration : 0.5, ease : "easeInOut"}
                });
                
                // now pin the bio (switch from normal flow -> fixed)
                setBioPinned(true);

                // allow DOM/layout to update so the bio actually becomes fixed
                await new Promise(requestAnimationFrame);

                // lock body scroll and reset bio internal scroll to top
                // document.body.style.overflow = "hidden";
                lockBodyScroll();
                if (bioRef.current) bioRef.current.scrollTop = 0;

                await bioControls.start({
                    opacity : 1,
                    scale : 1,
                    transition : {duration : 0.4, ease : "easeOut"}
                });

                // unlock the scroll
                // document.body.style.overflow = "";
                unlockBodyScroll();
            }



            if (y < triggerProportion && triggered.current) {
                // going back up

                // document.body.style.overflow = "hidden";
                lockBodyScroll();

                bioControls.start({
                    opacity : 0,
                    scale : 0.9,
                    transition : {duration : 0.4, ease : "easeIn"}
                });

                setBioPinned(false)


                await cardControls.start({
                    opacity : 1,
                    y : "0%",
                    transition : {duration : 0.5, ease : "easeInOut"}
                });


                // 8unlok
                // document.body.style.overflow = "";
                unlockBodyScroll();
                triggered.current = false;


            }

        })

        return () => {
            unsubscribe();
            // document.body.style.overflow = "";
            unlockBodyScroll();
        }

    }, [scrollYProgress, cardControls, bioControls]);
      



    if (!mounted) return null;





    return (
        <main className='home-main relative flex flex-col h-[300vh]'>

            <motion.div className="card-slide fixed top-0 left-0 w-full h-dvh items-center justify-center"
                style={{boxShadow : '8px 8px 8px rgb(0, 0, 0, 0.3)'}}
                initial={{y : "0%", opacity : 1}}
                animate={cardControls}
            >
                <div>
                    <HomePageMobile />
                </div>
            </motion.div>

            {/* <div className="h-[70vh]" /> */}

            <motion.section className='bio-section-mobile z-10'
                style={
                    bioPinned ?
                    {
                        position: "fixed",
                        top : 0,
                        left: 0,
                        width : "100%",
                        height : "100dvh",
                        overflowY : "auto"
                    }
                    :
                    {
                        position : "relative"
                    }
                }
                ref={bioRef}
                initial={{opacity : 0, scale : 0.9}}
                animate={bioControls}

            >
                <HomeBioSection />
            </motion.section>


        </main>
    )
}

export default MobileHome
