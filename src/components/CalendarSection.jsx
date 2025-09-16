"use client"
import ShowProvider from '@/app/context/ShowContext'
import React from 'react'
import Calendar from './Calendar'

const CalendarSection = () => {
  return (
    <ShowProvider>
        <div className='w-full px-[2%] h-full '>

            <Calendar /> 

            <hr className='hidden lg:block w-[86%] ml-[7%] mb-8 mt-16' />
        
        </div>
    </ShowProvider>
  )
}

export default CalendarSection
