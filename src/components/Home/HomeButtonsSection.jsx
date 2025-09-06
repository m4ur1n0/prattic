import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'
import { animateScroll as scroller } from 'react-scroll/modules'

const HomeButtonsSection = () => {

    function scrollDown() {
        scroller.scrollTo((document.body.scrollHeight - window.innerHeight) * 0.25, {
            duration: 1500,
            smooth: "easeInOutQuart"
        });
    }

    function mobileScrollDown() {
        console.log("XXXX")
        window.scrollTo({top : 61, behavior : "auto"});
    }

  return (
    <section
        className="relative flex flex-col items-center  gap-8 md:gap-8 mt-[3%] pt-[1vh] lg:pt-0"
    >
        <div className='hidden lg:flex flex-row flex-wrap justify-center gap-8 max-w-[500px]'>
            <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="LINEUP" width={200} href="/schedule" />
            <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGNUP" width={200} href="/sign-up" />
            <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="TICKETS" width={200} href="/sign-up" />
        </div>

        <div className='lg:hidden w-full flex flex-col gap-8 items-center'>
            <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGNUP" width={200} href="/sign-up" />
            <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="TICKETS" width={200} href="/sign-up" />
        </div>



        {/* seems like te down arrow has to go here.... */}

        <div className="hidden lg:block absolute bottom-[6%] pt-14 lg:pt-0 h-[5%] lg:-bottom-16 lg:h-[20%] cursor-pointer" onClick={scrollDown}>
            <img className='mb-0 h-[40px] lg:h-[100%]' src="vectors/down-chevron.svg" alt="downward-pointing chevron" />
        </div>

        {/* <button className='> */}

        <p className='text-[1.1rem] absolute lg:hidden -bottom-[35%] text-gray-500 font-merri border-none z-20' onClick={mobileScrollDown}>

            More &darr;

        </p>

        {/* </button> */}

      
    </section>
  )
}

export default HomeButtonsSection
