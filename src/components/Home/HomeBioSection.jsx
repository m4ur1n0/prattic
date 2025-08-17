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
    <section className='home-bio-section w-[60%] flex flex-col items-center overflow-y-scroll gap-10'>

        <div className='about-prattic '>
            <h2>
                The Prattic?
            </h2>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div>

        <div className='prattic-bios'>

            {
                prattic_bios_info.map((person, i) => (
                    // eventually <PratticBioCard>
                    <div className='flex flex-col' key={i}>
                        <img src={person.image} className='' alt={`Image of Prattic oficionado ${person.name}`} />
                        <h3>{person.name}</h3>
                        <p className=''>
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
