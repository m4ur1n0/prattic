import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'

const HomeButtonsSection = () => {
  return (
    <div
        className="flex flex-col items-center gap-8 md:gap-8 mt-3 h-full"
    >

        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
        <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />

        {/* seems like te down arrow has to go here.... */}

        <img className='fixed -bottom-16 w-[90%] h-[20%]' src="vectors/down-chevron.svg" alt="downward-pointing chevron" />

      
    </div>
  )
}

export default HomeButtonsSection
