"use client"
import ScheduleContent from '@/components/ScheduleContent'
import React from 'react'
import ShowProvider from '../context/ShowContext'

const page = () => {
  return (
    <ShowProvider>
      <main className="schedule-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center overflow-hidden">

        <ScheduleContent />
        
      </main>
    </ShowProvider>
  )
}

export default page
