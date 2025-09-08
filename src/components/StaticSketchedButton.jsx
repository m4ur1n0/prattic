"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const StaticSketchedButton = ({ vectorFile, width, href, label, height = 60, fontSize=null, onHit=null, bgColor="#f6f7f0", hoverColor="#e5e7dd"}) => {
  const nav = useRouter()


  // `bg-[${bgColor}] hover:bg-[${hoverColor}]`
  // ${(bgColor && hoverColor) ? "bg-[#7ab3d6] bg-[#689bba]" : "bg-background hover:bg-app-hover"}
  return (
    <button
        onClick={onHit === null ? () => nav.push(href) : onHit}
        className={`static-render-sketch-button relative cursor-pointer button-shadow transition-colors duration-200 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-app-black`}
        style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor : bgColor, 
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = hoverColor }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = bgColor }}
    >
      {/* bg sketch image */}
      <img
        src={`vectors/${vectorFile}`}
        alt="rough sketch button with label"
        className="absolute inset-0 w-full h-full object-cover"
        loading='eager'
      />

      {/* label - stay centered */}
      <p
        className={`absolute inset-0 flex items-center justify-center font-bold text-center leading-none ${fontSize ? `text-${fontSize}` : ""}`}
        style={{
          padding: 0,
          margin: 0
        }}
      >
        {label}
      </p>
    </button>
  )
}

export default StaticSketchedButton
