import React from 'react'

const TicketsHeader = () => {
  return (
    <header className='schedule-header flex flex-col items-center w-full overflow-x-hidden h-[36dvh] text-center overflow-hidden'>

        <h1 className=' text-8xl font-bold scale-y-[80%] scale-x-[140%] w-[8ch] text-wrap no-select'>
            ENTER THE ATTIC
        </h1>

        <hr className='w-5/6 mt-2 md:mt-3 mb-2' />

        <p className='text-[1rem] md:text-[1.2rem] font-merri font-semibold text-gray-700'>
            The Prattic takes full responsibility for any and all cachinnation.
        </p>

    </header>
  )
}

export default TicketsHeader
