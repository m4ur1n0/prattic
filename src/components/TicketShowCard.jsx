

import React from 'react'

const TicketShowCard = ({show}) => {
    const dateStr = (show.sheetName.split('_')[1].split('/').slice(0,2)).join('/')

    return (

        <div className={`future-show-card w-full cursor-pointer flex items-center justify-between max-h-[15%] gap-4 px-3 py-2  rounded-md shadow-md hover:scale-1.1 bg-app-background transition-all duration-200 ease-in-out text-nowrap overflow-hidden border ${show.isOpenMic ? "border-gray-200" : "border-blue-300"}`}>
            <p className='font-bold'>
                ({dateStr})
            </p>
            <p className='truncate'>
                {show.showName}
            </p>

            <a className='rounded-lg w-[20%] h-full flex items-center justify-center px-4 py-2 overflow-hidden bg-gray-900 hover:bg-gray-700 transition-all duration-200 ease-in-out' target={"_blank"} href={show.eventbrite}>

                <img className='h-full object-contain ' src="/vectors/tickets.svg" alt="tickets icon" />

            </a>
        </div>

    )
}

export default TicketShowCard
