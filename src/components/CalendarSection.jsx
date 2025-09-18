"use client"
import ShowProvider from '@/app/context/ShowContext'
import React from 'react'
import Calendar from './Calendar'

const CalendarSection = () => {
  return (
    <ShowProvider>
        <div className='w-full px-0 lg:px-[2%] h-full block'>

            {/* <div className='w-full block overflow-x-hidden'> */}
                <Calendar />
            {/* </div> */}

            <hr className='hidden lg:block w-[86%] ml-[7%] mb-8 mt-16' />
        
        </div>
    </ShowProvider>
  )
}

export default CalendarSection
