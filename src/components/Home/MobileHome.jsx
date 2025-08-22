"use client"

import React, {useState, useEffect} from 'react'
import HomePageMobile from './HomePageMobile';
import HomePageMobileNoIntro from './HomePageMobileNoIntro';


const MobileHome = () => {

    const [shouldAnimate, setShouldAnimate] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
      const hasAnimated = sessionStorage.getItem('hasAnimated') === "true";

      if (!hasAnimated) {
        sessionStorage.setItem("hasAnimated", true);
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
        setAnimationComplete(true);
      }

    }, [])

    if (shouldAnimate === null) {
      return null;
    }

  return (
    
        shouldAnimate ? 
        <HomePageMobile />
        :
        <HomePageMobileNoIntro />
  )
}

export default MobileHome
