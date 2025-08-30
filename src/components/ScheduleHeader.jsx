"use client"
import { useShow } from '@/app/context/ShowContext'
import React from 'react'

const ScheduleHeader = () => {

  const {nextShowNameAndDate, nextShowData} = useShow();
  

  return (
    // <div className='schedule-header flex flex-col items-center mt-8'>

        <header className='w-full flex flex-col items-center text-center h-[30dvh] '>
          {/* <h1 className='text-center text-8xl font-bold scale-y-[80%] scale-x-[130%] md:scale-x-[140%] no-select'> */}
            <h1 className='text-8xl font-bold scale-y-[80%] no-select'>
                WHO'S ON FIRST?
            </h1>

            <hr className='w-5/6 mt-2 md:mt-3 mb-2' />

            <p className='text-gray-700 text-[1rem] font-[700] font-semibold font-merri'>
                Next show : {nextShowNameAndDate ? `${nextShowNameAndDate["next_date"]} - ${nextShowData["startTime"]} PM` : ""}
            </p>

        </header>

      
    // </div>
  )
}

export default ScheduleHeader
