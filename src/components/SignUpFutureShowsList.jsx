"use client"
import { useShow } from '@/app/context/ShowContext'
import { getNextShowData } from '@/app/lib/GetInfo';
import React, { useEffect, useState } from 'react'
import { Grid } from 'react-loader-spinner';
import SignUpShowCard from './SignUpShowCard';

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

        <section className='list-of-future-shows no-scrollbar flex-1 h-[50dvh] flex flex-col items-center overflow-y-auto w-full border border-gray-200 rounded-lg p-4 gap-2'
          style={{
            justifyContent : allFutureShows ? (allFutureShows.length > 0 ? "start" : "center") : "center"
          }}
        >
            {  
              (showsData && showsData.length > 0) ? (
                showsData.map((futureShow, i) => (
                    <SignUpShowCard show={futureShow} key={i} />
                ))
              ) : (
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
              )
            }


        </section>

    )
}

export default SignUpFutureShowsList
