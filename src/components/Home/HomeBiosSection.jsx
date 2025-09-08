import React from 'react'
import StaticSketchedButton from '../StaticSketchedButton'


const HomeBioSection = ({buttonsHidden=null}) => {

    const prattic_bios_info = [
        {
            name : "MATEO GARCIA-BRYCE",
            bio : "(right) is a rising senior at Northwestern University studying Political Science and International Studies. As a child he turned heads with an irresistible personality and a flair for the dramatic. Instead of rising to the top of the comedy world, he was drawn towards politics, working for multiple political campaigns and on Capitol Hill. He now studies International Aid and Development practices throughout the world, and is looking for a job. He wears Uggs inside the house, and enjoys climbing trees. ",
            image : "https://placehold.co/200x250"
        },
        {
            name : "LUCA HIRSCH",
            bio : "(left) is a rising senior at Northwestern University studying Radio/Television/Film and International Studies. After realizing at a young age that he may not be a professional soccer player, he became passionate about the film industry, marketing, and the strange rabbit holes of Wikipedia. His favorite color is green, and somehow, he's never been to Applebee's.",
            image : "https://placehold.co/200x250"
        },
        {
            name : "JACKSON HELLER",
            bio : "(center) is known by many names: visionary, pioneer, forefather, legend. After doing consistent standup while studying abroad in Prague (shoutout Metro Comedy Club), a bright-eyed Jackson came back to the motherland with a singular dream: to bring the magic of a great standup venue to Northwestern. A savant of the stupid, silly, and surreal, his standup idols include Mitch Hedberg, Hannibal Burress, Sheng Wang, and Mateo Garcia-Bryce.",
            image : "https://placehold.co/200x250"
        }
    ]


    const colorA = "#db8c8c";
    const colorB = "#a8dbed";

    const aPrime = "#c47474";
    const bPrime = "#8bbbcc";

    function mobileScrollUp() {
        // console.log("XXXX")
        window.scrollTo({top : 0, behavior : "auto"});
    }


  return (
    <section className='home-bio-section flex flex-col items-center overflow-y-scroll lg:gap-10 px-3 lg:px-0 pb-10 md:p-10'>

        <img className='lg:hidden w-[10%] object-fit my-0 my-4' alt="up chevron arrow" src="/vectors/up-chevron.svg" onClick={mobileScrollUp}/>

        <div className='w-full flex flex-col gap-8 my-[10%] lg:hidden items-center'>
            <p className='text-[1rem] text-center font-merri '>
                Just wondering who's performing next? Check out the lineup.
            </p>
            <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="LINEUP" width={200} href="/schedule" bgColor={colorB} hoverColor={bPrime} />
        </div>

        <div className='about-prattic '>

            <div className='prattic-main-photo w-full flex justify-center max-h-[60vh] object-scale-down'>

                <img src="/images/prattic-gentlemen.jpg" className='' alt={`Home image for the Prattic : The three founders`} />


            </div>

            <h1 className='font-bold text-[4.6rem] text-center lg:text-left my-8 lg:my-0'>
                The Prattic?
            </h1>

            <article className='prattic-copy text-[1.2rem] font-merri flex flex-col gap-4 px-4 lg:px-0'>
                <p className=''>
                    The Prattic was founded in 2025 when three Northwestern students turned their off-campus attic into a stage. What began as late-night joke swaps quickly grew into one of Chicagoland's most exciting underground comedy spots. Today, The Prattic packs its 100-plus seat space every week, drawing a mix of rising comics and established performers for high-energy shows that keep audiences coming back.
                </p>

                <p>
                    Our founding principles are simple: create an inclusive, low pressure, space where both first-timers and seasoned professionals can experiment, connect and have fun. The Prattic is committed to building a community that welcomes all performers and senses of humor. 
                </p>

                <p>
                    The intimacy of our attic setting is unparalleled, fostering an energy you cannot find anywhere else. The crowd is hot, the laughs are loud, and people keep coming back. 
                </p>

                <p>
                    As we enter our second year, we're excited to <span className="font-bold">expand</span> our reach, <span className="font-bold">welcome</span> new voices, and <span className="font-bold">continue providing a welcoming space</span> in Chicago's vibrant comedy scene. 
                </p>
            </article>

        </div>

        <article className='prattic-bios mt-18'>

            <h2 className='font-bold text-[4rem] md:text-[4.6rem] text-center lg:text-left'>Meet The Founders</h2>

            {
                prattic_bios_info.map((person, i) => (
                    <div className='flex flex-col gap-4 my-18 font-merri' key={i}>
                        <h3 className='text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-[400]'>{person.name}</h3>
                        <p className=' text-[1.3rem] px-4'>
                            {person.bio}
                        </p>
                    </div>
                ))
            }

        </article>

        <section className='call-to-action flex flex-col gap-8 w-full'>

            <h2 className='text-[3rem] md:text-[4rem] font-bold text-center lg:text-left'>
                Join in the fun!
            </h2>

            <div className='cta-buttons flex flex-col md:flex-row justify-center items-center gap-8 mb-8' aria-hidden={buttonsHidden} inert={buttonsHidden}>
                <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SIGN-UP" width={200} href="/sign-up" bgColor={colorA} hoverColor={aPrime} />
                <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="TICKETS" width={200} href="/tickets" bgColor={colorA} hoverColor={aPrime} />
            </div>



        </section>
      
    </section>


  )
}

export default HomeBioSection
