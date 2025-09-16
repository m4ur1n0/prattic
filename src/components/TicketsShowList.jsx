"use client"
import { useShow } from '@/app/context/ShowContext'
import React, { useEffect, useState } from 'react'
import { Grid } from 'react-loader-spinner';
import TicketShowCard from './TicketShowCard';

const TicketsShowList = () => {
    const {futureShowsData} = useShow();

    const [showsData, setShowsData] = useState(null);

    useEffect(() => {

        if (futureShowsData) {
            // console.log(futureShowsData);
            setShowsData(futureShowsData);

        }


    }, [futureShowsData])


    return (

        // border border-gray-200 h-[45dvh] w-full 
        // <SketchedBorder>
            <section className='list-of-future-shows no-scrollbar border border-gray-200 rounded-md h-[43dvh] w-full overflow-y-scroll'
            >

                <div className='flex flex-col gap-2 p-2 w-full'>
                    {(showsData && showsData.length > 0) ? (
                        showsData.map((futureShow, i) => (
                            <TicketShowCard show={futureShow} key={i} />
                        ))
                    ) : (
                        <div className='w-full h-[43dvh] flex items-center justify-center'>
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

export default TicketsShowList
