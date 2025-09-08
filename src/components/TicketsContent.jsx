"use client"
import ShowProvider from '@/app/context/ShowContext'
import React from 'react'
import StaticSketchedButton from './StaticSketchedButton'
import TicketsHeader from './TicketsHeader'
import TicketsShowList from './TicketsShowList'

const TicketsContent = () => {
  return (
    <div className='w-full h-full max-h-dvh flex flex-col items-center justify-center relative  pt-8 pb-6'>

        <div className='absolute top-3 left-4 '>
            <StaticSketchedButton vectorFile="sharpButtonSquare.svg" width={35} height={35} href="/" label="<" />
        </div>

        <TicketsHeader />

        <section className='w-full mt-6 px-4'>
            <ShowProvider>
                <TicketsShowList />
            </ShowProvider>
        </section>
      
    </div>
  )
}

export default TicketsContent
