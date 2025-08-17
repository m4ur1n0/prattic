import Image from 'next/image'
import React from 'react'

const HomeHeader = () => {
  return (
    <header className='home-page-icon md:w-[450px] mb-5 flex flex-col items-center'>

        {/* <img src="https://placehold.co/200x200" alt="The Prattic Logo" className='' /> */}
        <Image src="/images/prattic-line-drawing-v1-opt.png" alt="The Prattic House" className='w-[250px] h-[250px] no-select' width={250} height={250} />

        <h1 className='text-8xl font-bold scale-y-[80%] scale-x-[110%] md:scale-x-[140%] no-select'>THE PRATTIC</h1>

        <p className='text-lg mb-1 no-select'>Est. 2024</p>

        {/* <hr className='w-[60%]' /> */}

        <hr className='w-[250px]' />
      
    </header>
  )
}

export default HomeHeader
