import React from 'react'

const SignUpHeader = () => {
  return (
    <header className='schedule-header flex flex-col items-center w-full overflow-x-hidden h-[35dvh] text-center overflow-hidden'>

        <h1 className=' text-8xl font-bold scale-y-[80%] scale-x-[140%] w-[8ch] text-wrap no-select'>
            TAKE THE STAGE
        </h1>

        <hr className='w-5/6 mt-2 md:mt-3 mb-2' />

        <p className='text-[1rem] md:text-[1.2rem] font-merri font-semibold text-gray-700'>
            Stand up and be counted
        </p>

    </header>
  )
}

export default SignUpHeader
