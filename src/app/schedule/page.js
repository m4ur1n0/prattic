"use client"
import ScheduleContent from '@/components/ScheduleContent'
import React from 'react'
import ShowProvider from '../context/ShowContext'

const page = () => {
  return (
    <ShowProvider>
      <div className="home-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center overflow-hidden">

        <ScheduleContent />
        
      </div>
    </ShowProvider>
  )
}

export default page
