"use client"
import HomeDesktop from "@/components/Home/HomeDesktop";
import HomeMobile from "@/components/Home/HomeMobile";
import { useMediaQuery } from "@react-hook/media-query";
// import { useEffect, useState } from "react";

export default function Home() {

  const isMobile = useMediaQuery("(max-width: 768px)");
  

  return (
    <main className="home-page-full w-screen md:px-[15%] lg:px-[30%] flex flex-col items-center overflow-hidden">

      {/* <HomePageContent /> */}

      {
        isMobile ?
        <HomeMobile />
        :
        <HomeDesktop />
      }
      
    </main>
  );
}