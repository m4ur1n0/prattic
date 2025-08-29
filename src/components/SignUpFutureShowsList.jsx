"use client"
import { useShow } from '@/app/context/ShowContext'
import React from 'react'
import { Grid } from 'react-loader-spinner';

const SignUpFutureShowsList = () => {

    const {allFutureShows} = useShow();


    return (
      <div className='px-8 md:px-16'>
        <div className='list-of-future-shows flex flex-col items-center overflow-scroll min-h-[150px] max-h-[250px] md:max-h-[300px] w-full border border-gray-200 rounded-lg py-8 px-3 mt-5 gap-2'
          style={{
            justifyContent : allFutureShows ? (allFutureShows.length > 0 ? "start" : "center") : "center"
          }}
        >
            {  
              (allFutureShows && allFutureShows.length > 0) ? (
                allFutureShows.map((futureShow, i) => (
                    <div className='future-show-card w-full h-[60px] cursor-pointer flex items-center gap-4 px-3 border border-gray-200 rounded-md shadow-md hover:scale-1.1 hover:bg-gray-100 transition-all duration-200 ease-in-out' key={i}>
                      <p className='font-bold'>
                        ({(futureShow.split('_')[1].split('/').slice(0,2)).join('/')})
                      </p>
                      <p>
                        Standup
                      </p>
                    </div>

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


        </div>
      </div>
    )
}

export default SignUpFutureShowsList
