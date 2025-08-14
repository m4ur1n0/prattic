import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'

const HomeButtonSection = () => {
  return (
    <section className='home-page-button-section flex flex-col gap-8 md:gap-8 mt-5 h-full'>

        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
        <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />
      
    </section>
  )
}

export default HomeButtonSection
