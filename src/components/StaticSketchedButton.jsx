"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const StaticSketchedButton = ({vectorFile, label, width, href}) => {
    // i'm not renaming all this shit again -- just gonna have to remember this only does links

    const nav = useRouter();

  return (
    <div onClick={() => nav.push(href)} className="static-render-sketch-button flex justify-center items-center relative cursor-pointer button-shadow hover:bg-black/5 transition-colors duration-200 ease-in-out"
        style={{
            width : `${width}px`,
            height : `60px`
        }}
    >

        <img src={`vectors/${vectorFile}`} alt={`rough sketch button with label ${label}`} width={width} height={60} className="absolute top-0 left-0"/>

        <p className='font-bold'>{label}</p>
      
    </div>
  )
}

export default StaticSketchedButton
