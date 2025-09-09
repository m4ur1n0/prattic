import Image from 'next/image'
import React from 'react'

const HomeSocialsSection = () => {
  return (
    <div className='flex gap-10 justify-center items-center'>

        <a href="https://www.youtube.com" className='w-[50px] h-[50px] object-contain' target={"_blank"}>
            <Image className="" src="/vectors/youtube.svg" alt="YouTube Logo, link to the Prattic's YouTube" width={50} height={50}/>
        </a>

        <a href="https://www.instagram.com/theprattic/" className='w-[50px] h-[50px] object-contain' target={"_blank"}>
            <Image className="" src="/vectors/instagram.svg" alt="Instagram Logo, link to the Prattic's Instagram" width={50} height={50}/>
        </a>

        {/* <a href="https://x.com/theprattic" className='w-[50px] h-[50px] object-contain' target={"_blank"}>
            <Image className="" src="/vectors/twitter.svg" alt="Twitter Logo, link to the Prattic's Twitter" width={50} height={50}/>
        </a> */}

        <a href="mailto:theprattic@gmail.com" className='w-[50px] h-[50px] object-contain' target={"_blank"}>
            <Image className="" src="/vectors/email.svg" alt="Email Logo, link to the Prattic's email" width={50} height={50}/>
        </a>
      
    </div>
  )
}

export default HomeSocialsSection
