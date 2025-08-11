import React from 'react'

const HomeHeader = () => {
  return (
    <header className='home-page-icon mt-8 md:mt-12 mb-5 w-full flex flex-col items-center'>

        {/* <img src="https://placehold.co/200x200" alt="The Prattic Logo" className='' /> */}
        <img src="/images/prattic-line-drawing-v1-opt.png" alt="The Prattic House" className='w-[250px] h-[250px]' />

        <h1 className='text-8xl font-bold scale-y-[80%] scale-x-[110%] md:scale-x-[140%] no-select'>THE PRATTIC</h1>

        <p className='text-lg mb-1 no-select'>Est. 2024</p>

        <hr className='w-[60%]' />
      
    </header>
  )
}

export default HomeHeader
