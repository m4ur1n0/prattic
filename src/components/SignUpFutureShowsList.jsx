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

        // border border-gray-200
        <section className='list-of-future-shows relative no-scrollbar flex-1 h-[45dvh] flex flex-col items-center overflow-y-auto w-full  rounded-lg p-4 gap-2'
          style={{
            justifyContent : allFutureShows ? (allFutureShows.length > 0 ? "start" : "center") : "center"
          }}
        >

            {/* <img
                src="/vectors/bigBox.svg"
                alt="sketched border"
                className="fixed inset-0 min-w-full h-[45dvh] pointer-events-none"
            /> */}

            

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
