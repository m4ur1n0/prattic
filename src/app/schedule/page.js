"use client"
import ScheduleContent from '@/components/ScheduleContent'
import React from 'react'
import ShowProvider from '../context/ShowContext'

const page = () => {
  return (
    <ShowProvider>
        {/* md:px-[15%] lg:px-[30%] */}
      <main className="schedule-page-full w-dvw h-dvh flex flex-col items-center justify-between overflow-hidden">
        <div className="w-full max-w-md h-full flex flex-col items-center px-4">
            <ScheduleContent />
        </div>
        
      </main>
    </ShowProvider>
  )
}

export default page
