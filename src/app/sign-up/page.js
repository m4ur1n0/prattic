import SignUpContent from '@/components/SignUpContent';

// import StaticSketchedButton from '@/components/StaticSketchedButton';
import React from 'react'

const page = () => {

  return (
    <main className='signup-page-full w-dvw h-dvh flex flex-col items-center justify-between overflow-hidden'>
        {/* ^^ centers its content vertically */}
        <div className="w-full max-w-md h-full flex flex-col items-center px-4">
            <SignUpContent />
        </div>

    </main>
  )
}

export default page
