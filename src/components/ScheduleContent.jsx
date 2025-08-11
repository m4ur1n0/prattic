import React from 'react'
import ScheduleHeader from './ScheduleHeader'
import ScheduleTable from './ScheduleTable'

const ScheduleContent = () => {



  return (
    <div className='relative schedule-content-full w-full h-screen flex flex-col items-center '>

        <a href="/" className='absolute top-2 md:top-5 left-5 w-[35px] h-[35px] p-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-color duration-50 smooth'>
          <img src="/vectors/back.svg" alt="Prattic House Logo Vectorized" />
        </a>

        <ScheduleHeader />

        <section className='schedule-table w-full px-16 mt-10'>
          <ScheduleTable />
        </section>

      
    </div> 
  )
}

export default ScheduleContent
