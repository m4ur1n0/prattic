import React from 'react'

const HomeHeader = () => {
  return (
    <header className='home-page-icon my-10 w-full flex flex-col items-center'>

        <img src="https://placehold.co/200x200" alt="The Prattic Logo" className='' />

        <h1 className='text-8xl font-bold scale-y-[80%] scale-x-[120%] md:scale-x-[140%]'>THE PRATTIC</h1>

        <p className='text-lg'>Est. 2024</p>

        <hr className='w-[60%]' />
      
    </header>
  )
}

export default HomeHeader
