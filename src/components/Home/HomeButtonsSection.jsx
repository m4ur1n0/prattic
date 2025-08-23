import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'

const HomeButtonsSection = () => {
  return (
    <div
        className=" flex flex-col items-center gap-8 md:gap-8 mt-[3%] pt-[1vh]"
    >

        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN-UP" width={200} href="/sign-up" />
        <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />

        {/* seems like te down arrow has to go here.... */}

        <div className="absolute bottom-[6%] pt-14 lg:pt-0 h-[5%] lg:-bottom-16 lg:h-[20%] ">
            <img className='mb-0 h-[40px] lg:h-[100%]' src="vectors/down-chevron.svg" alt="downward-pointing chevron" />
        </div>

      
    </div>
  )
}

export default HomeButtonsSection
