"use client"
import { useShow } from '@/app/context/ShowContext'
import React from 'react'
import { Grid } from 'react-loader-spinner';

const SignUpFutureShowsList = () => {

    const {allFutureShows} = useShow();

    return (
      <section className='list-of-future-shows flex flex-col items-center overflow-scroll max-h-[250px] w-[90%] border rounded-lg py-8 px-3 mt-5 gap-2'>


          {
            allFutureShows.length > 0 ? (
              allFutureShows.map((futureShow, i) => (
                  <div className='future-show-card w-full h-[60px] cursor-pointer flex items-center gap-4 px-3 border rounded-md shadow-md hover:scale-1.1 bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out' key={i}>
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


      </section>
    )
}

export default SignUpFutureShowsList
