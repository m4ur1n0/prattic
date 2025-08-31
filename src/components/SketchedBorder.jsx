"use client"

import React, { useEffect, useRef, useState } from 'react'
import rough from 'roughjs/bin/rough'

const SketchedBorder = ({ children }) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateSize = () => {
      const rect = containerRef.current.getBoundingClientRect()
      setSize({ width: rect.width, height: rect.height })
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg || size.width === 0 || size.height === 0) return

    svg.innerHTML = ""
    const rc = rough.svg(svg)

    const node = rc.rectangle(0, 0, size.width, size.height, {
      roughness: 1.5,
      stroke: "#000",
      strokeWidth: 4,
    })

    svg.appendChild(node)
  }, [size])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[46dvh]"
    >
      {/* border layer */}
      <svg
        ref={svgRef}
        width={size.width}
        height={size.height}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
        preserveAspectRatio="none"
      />

      {/* other stuff layer */}
      <div className="absolute inset-0 p-4 overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  )
}

export default SketchedBorder
