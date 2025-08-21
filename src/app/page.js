"use client"


import DesktopHome from "@/components/Home/DesktopHome";
import DesktopMobile from "@/components/Home/DesktopMobile";
import { useMediaQuery } from "@react-hook/media-query";

export default function Home() {

    const isMobile = useMediaQuery("(max-width: 768px)");
  

    return (
        // <main className="home-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center overflow-hidden">

        //   <HomePageContent />
        
        // </main>

        // <HomePageDesktop />
        isMobile ?
        <DesktopMobile />
        :
        <DesktopHome />
    );
}