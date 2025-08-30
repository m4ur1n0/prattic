"use client"

import React from 'react'
import SignUpFutureShowsList from '@/components/SignUpFutureShowsList';
import SignUpHeader from '@/components/SignUpHeader';
import ShowProvider from '@/app/context/ShowContext';
import StaticSketchedButton from '@/components/StaticSketchedButton';

const SignUpContent = () => {
  return (
    // items-center justify-center gap-8 lg:gap-0 lg:justify-start
    <div className='w-full h-full max-h-dvh flex flex-col items-center justify-center relative  pt-8 pb-6'>

        {/* sm:top-5 sm:left-8 */}
        <div className='absolute top-3 left-4 '>
            <StaticSketchedButton vectorFile="sharpButtonSquare.svg" width={35} height={35} href="/" label="<" />
        </div>

        <SignUpHeader />

        <section className='list-of-shows-section w-full mt-6 px-4 '>
            <ShowProvider>
                <SignUpFutureShowsList />
            </ShowProvider>
        </section>

        

      
    </div>
  )
}

export default SignUpContent
