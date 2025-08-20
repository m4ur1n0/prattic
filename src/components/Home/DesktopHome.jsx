"use client"

import React, {useState, useEffect} from 'react'
import HomePageDesktop from './HomePageDesktop';
import HomePageDesktopNoIntro from './HomePageDesktopNoIntro';

const DesktopHome = () => {

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
        <HomePageDesktop />
        :
        <HomePageDesktopNoIntro />
  )
}

export default DesktopHome
