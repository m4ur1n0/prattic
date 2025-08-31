"use client"
import { useShow } from '@/app/context/ShowContext'
import { getNextShowData } from '@/app/lib/GetInfo';
import React, { useEffect, useState } from 'react'
import { Grid } from 'react-loader-spinner';
import SignUpShowCard from './SignUpShowCard';
import SketchedBorder from './SketchedBorder';
import SketchedButtonLink from './SketchedButtonLink';

const SignUpFutureShowsList = () => {

    const {allFutureShows} = useShow();

    const [showsData, setShowsData] = useState(null);

    useEffect(() => {

        async function loadFutureShows() {
            // only if there's data in allFutureShows (inits as null)

            // we are going to ignore 'finalized' because what matters more here is whether the show is FULL
            let promArr = allFutureShows.map((fs) => getNextShowData(fs));
            let futureShows = await Promise.all(promArr);

            // now we should have all the data
            setShowsData(futureShows);
        }

        if (allFutureShows) {
            loadFutureShows();
        }


    }, [allFutureShows])


    return (

        // border border-gray-200 h-[45dvh] w-full 
        // <SketchedBorder>
            <section className='list-of-future-shows no-scrollbar border border-gray-200 rounded-md h-[45dvh] w-full overflow-y-scroll'
            >

                <div className='flex flex-col gap-2 p-2 w-full'>
                    {(showsData && showsData.length > 0) ? (
                        showsData.map((futureShow, i) => (
                            <SignUpShowCard show={futureShow} key={i} />
                        ))
                    ) : (
                        <div className='w-full h-[45dvh] flex items-center justify-center'>
                            <Grid
                            visible={true}
                            height="50"
                            width="50"
                            color="#334155"
                            ariaLabel='grid-loading'
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass="grid-wrapper"
                            />
                        </div>
                    )}
                </div>


            </section>
        // </SketchedBorder>
    )
}

export default SignUpFutureShowsList
