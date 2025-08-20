import React from 'react'

const HomeBioSection = () => {

    const prattic_bios_info = [
        {
            name : "Mateo Lastname",
            bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image : "https://placehold.co/200x250"
        },
        {
            name : "Jackson Lastname",
            bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image : "https://placehold.co/200x250"
        },
        {
            name : "Luca Hirsch",
            bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image : "https://placehold.co/200x250"
        }
    ]


  return (
    <section className='home-bio-section flex flex-col items-center overflow-y-scroll gap-10'>

        <div className='about-prattic '>

            <div className='prattic-main-photo w-full flex justify-center max-h-[60vh] object-scale-down'>

                <img src="https://placehold.co/500x500" className='' alt={`Home image for the Prattic`} />


            </div>

            <h2 className='font-bold text-[4.6rem]'>
                The Prattic?
            </h2>

            <p className='text-md font-merri text-[1.5rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div>

        <div className='prattic-bios'>

            {
                prattic_bios_info.map((person, i) => (
                    // eventually <PratticBioCard>
                    <div className='flex flex-col gap-4 my-24' key={i}>

                        <div className='prattic-main-photo w-full flex justify-center max-h-[40vh] object-scale-down'>

                            <img src={person.image} className='' alt={`Image of Prattic oficionado ${person.name}`} />

                        </div>
                        <h3 className='font-bold text-[4rem]'>{person.name}</h3>
                        <p className='font-merri text-[1.3rem]'>
                            {person.bio}
                        </p>
                    </div>
                ))
            }

        </div>


      
    </section>


  )
}

export default HomeBioSection
