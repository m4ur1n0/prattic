

import React from 'react'

const TicketShowCard = ({show}) => {
    const dateStr = (show.sheetName.split('_')[1].split('/').slice(0,2)).join('/')

    return (

        <div className={`future-show-card w-full cursor-pointer flex items-center justify-between max-h-[15%] gap-4 px-3 py-2  rounded-md shadow-md hover:scale-1.1  transition-all duration-200 ease-in-out text-nowrap overflow-hidden border ${show.isOpenMic ? "border-gray-200 bg-app-background" : "border-red-400 bg-red-200 "}`}>
            <p className='font-bold'>
                ({dateStr})
            </p>

            <div className='overflow-hidden w-[60%] flex flex-nowrap gap-1 items-center px-0 '>
                {!show.isOpenMic && <img className='!h-[40px] object-contain -ml-2' src="/vectors/star.svg" alt="star icon" />}
                <p className='truncate'>
                    {show.showName}
                </p>
            </div>

            <a className='rounded-lg w-[20%] h-full flex items-center justify-center px-4 py-2 overflow-hidden bg-gray-900 hover:bg-gray-700 transition-all duration-200 ease-in-out' target={"_blank"} href={show.eventbrite}>

                <img className='h-full object-contain ' src="/vectors/tickets.svg" alt="tickets icon" />

            </a>
        </div>

    )
}

export default TicketShowCard
