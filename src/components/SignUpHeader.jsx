import React from 'react'

const SignUpHeader = () => {
  return (
    <header className='schedule-header flex flex-col items-center mt-8'>
        <div className='w-4/5 flex flex-col items-center'>
            <h1 className='text-center text-8xl font-bold scale-y-[80%] scale-x-[140%] no-select'>
                TAKE THE STAGE
            </h1>

            <hr className='w-5/6 mt-3 mb-2' />

            <p className='text-[1.5rem]'>
                Stand up and be counted
            </p>

        </div>
    </header>
  )
}

export default SignUpHeader
