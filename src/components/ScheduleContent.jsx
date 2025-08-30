import React from 'react'
import ScheduleHeader from './ScheduleHeader'
import ScheduleTable from './ScheduleTable'
import StaticSketchedButton from './StaticSketchedButton'

const ScheduleContent = () => {



  return (
    // justify-center lg:justify-start gap-8 lg:gap-0 
    <div className='relative schedule-content-full w-full h-full max-h-dvh flex flex-col items-center justify-center gap-6 pt-8 pb-6'>

        {/* top-2 md:top-5 left-8 */}
        <div className='absolute top-3 left-4'>
            <StaticSketchedButton vectorFile="sharpButtonSquare.svg" width={35} height={35} href="/" label="<" />
        </div>

        <ScheduleHeader />

        {/* px-10 md:px-16 mt-6 md:mt-10 */}
        <section className='schedule-table w-full mt-6 px-4'>
          <ScheduleTable />
        </section>

      
    </div> 
  )
}

export default ScheduleContent
