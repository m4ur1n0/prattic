import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'
import { motion } from 'framer-motion'

const HomeButtonSection = () => {
  return (

    <motion.section
      layout
      key="forward-buttons-section"
      initial={{opacity : 0, y : 20}}
      animate={{opacity : 1, y : 0}}
      exit={{opacity : 0, y: -20}}
      transition={{duration : 0.5, delay : 1.5}}
      className="flex flex-col gap-8 md:gap-8 mt-5 h-full"
    >

        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />
        <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />

        {/* <HomeButtonSection /> */}

    </motion.section>
  )
}

export default HomeButtonSection
