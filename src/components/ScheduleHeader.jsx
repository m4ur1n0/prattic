"use client"
import { useShow } from '@/app/context/ShowContext'
import React, { useState, useEffect } from 'react'

const ScheduleHeader = () => {

  const {nextShowData, setNextShowData} = useShow();
  

  return (
    <div className='schedule-header flex flex-col items-center mt-8'>

        <header className='w-4/5 flex flex-col items-center'>
          <h1 className='text-center text-8xl font-bold scale-y-[80%] scale-x-[140%]'>
              WHO'S ON FIRST?
          </h1>

          <hr className='w-5/6 mt-3 mb-2' />

          <p className='text-gray-700 text-[20px] font-[700]'>
            Next show : {nextShowData["next_date"]}
          </p>

        </header>

      
    </div>
  )
}

export default ScheduleHeader
