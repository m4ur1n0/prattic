// "use client"

// import { useRouter } from 'next/navigation'
// import React from 'react'

// const StaticSketchedButton = ({vectorFile, width, href, label, height=60}) => {
//     // i'm not renaming all this shit again -- just gonna have to remember this only does links

//     const nav = useRouter();

//   return (
//     <div onClick={() => nav.push(href)} className="static-render-sketch-button flex justify-center items-center relative cursor-pointer button-shadow hover:bg-black/5 transition-colors duration-200 ease-in-out p-0 m-0"
//         style={{
//             width : `${width}px`,
//             height : `${height}px`
//         }}
//     >

//         <img src={`vectors/${vectorFile}`} alt={`rough sketch button with label`} width={width} height={height} className="absolute top-0 left-0"/>

//         {/* <p className={`font-bold p-0 m-0 h-[${height}px] w-[${width}px] absolute top-0 left-0 text-center justify-center`}>{label}</p> */}
//         <p
//           className={`font-bold p-0 m-0 absolute top-0 left-0 flex justify-center items-center text-center`}
//           style={{
//             width: `${width}px`,
//             height: `${height}px`
//           }}
//         >
//           {label}
//         </p>
      
//     </div>
//   )
// }

// export default StaticSketchedButton


"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const StaticSketchedButton = ({ vectorFile, width, href, label, height = 60 }) => {
  const nav = useRouter()

  return (
    <div
      onClick={() => nav.push(href)}
      className="static-render-sketch-button relative cursor-pointer button-shadow hover:bg-black/5 transition-colors duration-200 ease-in-out"
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {/* Background sketch image */}
      <img
        src={`vectors/${vectorFile}`}
        alt="rough sketch button with label"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered label */}
      <p
        className="absolute inset-0 flex items-center justify-center font-bold text-center leading-none"
        style={{
          padding: 0,
          margin: 0
        }}
      >
        {label}
      </p>
    </div>
  )
}

export default StaticSketchedButton
