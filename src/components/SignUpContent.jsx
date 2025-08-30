"use client"

import React from 'react'
import SignUpFutureShowsList from '@/components/SignUpFutureShowsList';
import SignUpHeader from '@/components/SignUpHeader';
import ShowProvider from '@/app/context/ShowContext';
import StaticSketchedButton from '@/components/StaticSketchedButton';

const SignUpContent = () => {
  return (
    <div className='w-full h-dvh  flex flex-col items-center justify-center gap-8 lg:gap-0 lg:justify-start relative'>

        <SignUpHeader />

        <section className='list-of-shows-section w-full '>
            <ShowProvider>
                <SignUpFutureShowsList />
            </ShowProvider>
        </section>

        <div className='absolute top-5 md:top-5 left-8'>
            <StaticSketchedButton vectorFile="sharpButtonSquare.svg" width={35} height={35} href="/" label="<" />
        </div>

      
    </div>
  )
}

export default SignUpContent
