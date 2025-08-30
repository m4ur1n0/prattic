import React from 'react'
import ScheduleHeader from './ScheduleHeader'
import ScheduleTable from './ScheduleTable'
import StaticSketchedButton from './StaticSketchedButton'

const ScheduleContent = () => {



  return (
    <div className='relative schedule-content-full w-full h-screen flex flex-col items-center justify-center lg:justify-start gap-8 lg:gap-0 '>

        <div className='absolute top-2 md:top-5 left-8'>
            <StaticSketchedButton vectorFile="sharpButtonSquare.svg" width={35} height={35} href="/" label="<" />
        </div>

        <ScheduleHeader />

        <section className='schedule-table w-full px-10 md:px-16 mt-6 md:mt-10'>
          <ScheduleTable />
        </section>

      
    </div> 
  )
}

export default ScheduleContent
