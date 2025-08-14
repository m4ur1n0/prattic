"use client"

import React, { useEffect, useRef, useState } from 'react'
import rough from 'roughjs/bin/rough'
import { useRouter } from 'next/navigation'

const SketchedButtonLink = ({href, label, width, height}) => {

    // const svgRef = useRef<SVGSVGElement>(null);
    const svgRef = useRef(null);
    const [svgId] = useState(() => `rough-button-${Math.random().toString(36).slice(2, 9)}`);
    const router = useRouter();

    useEffect(() => {

        const svg = svgRef.current;
        if (!svg) return;

        svg.innerHTML = ''; // if there was a prev drawing, clear

        const rc = rough.svg(svg);
        
        // -----------------------------------------------------------
        // WORKING -- BUTTON BODY WITH SHARP CORNERS

        const node = rc.rectangle(0, 0, width, height, {
            roughness : 1.5,
            stroke : "#000",
            strokeWidth: 4,
            // fill: '#'
            // fillStyle: 
        });

        svg.appendChild(node);
        // -----------------------------------------------------------


        // -----------------------------------------------------------
        // WORKING -- BUTTON BODY WITH ROUNDED CORNERS

        // const roundedRectPath = `
        //     M10,0
        //     H190
        //     A10,10 0 0 1 200,10
        //     V50
        //     A10,10 0 0 1 190,60
        //     H10
        //     A10,10 0 0 1 0,50
        //     V10
        //     A10,10 0 0 1 10,0
        //     Z
        // `;

        // const node = rc.path(roundedRectPath, {
        //     roughness: 1.5,
        //     stroke: '#000',
        //     strokeWidth: 4,
        //     // fill: '#f5a623',
        //     // fillStyle: 'solid',
        // });
        // svg.appendChild(node);
        // -----------------------------------------------------------


    }, [svgId])

  return (
    <div className=''
        onClick={()=> router.push(href)}
        style={{
            width : `${width}px`,
            height : `${height}px`,
            cursor : 'pointer',
            userSelect : 'none',
            display : 'inline-block',
            position : 'relative'

        }}
    >

        <svg
            ref={svgRef}
            width={width}
            height={height}
            style={{
                position : 'absolute',
                top : 0,
                left : 0
            }}
        />
        <div
            style={{
                position : 'absolute',
                top : 0,
                left : 0,
                width : `${width}px`,
                height : `${height}px`,
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                fontWeight : 'bold',
                pointerEvents : 'none'
            }}
        >
            <p>{label}</p>
        </div>
    </div>
  )
}

export default SketchedButtonLink
