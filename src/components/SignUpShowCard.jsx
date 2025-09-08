

import React from 'react'
import SignUpForm from './SignUpForm'
import SketchButtonExternalLink from './SketchButtonExternalLink'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger  } from './ui/dialog'


const SignUpShowCard = ({show}) => {
    const dateStr = (show.sheetName.split('_')[1].split('/').slice(0,2)).join('/')

    const atCapacity = (show.performers.length >= show.maxPerformers);


    return (

        <Dialog className="">
            <DialogTrigger asChild>
                <div className={`future-show-card w-full cursor-pointer flex items-center gap-4 px-3 py-2 border border-gray-200 rounded-md shadow-md hover:scale-1.1  transition-all duration-200 ease-in-out text-nowrap overflow-hidden ${atCapacity ? "bg-[#c3c4be] ring-2 ring-red-200" : "bg-app-background hover:bg-app-hover"}`}>
                    <p className='font-bold'>
                        ({dateStr})
                    </p>
                    <p className='truncate'>
                        {show.showName}
                    </p>
                </div>
            </DialogTrigger>

            <DialogContent className="dialog-content sm:max-w-[425px] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
                <DialogHeader>
                    <DialogTitle className='font-bold text-3xl'>
                        {show.showName} {atCapacity && "(WAITLIST)"}
                    </DialogTitle>
                    <DialogDescription className='text-gray-700 text-[1rem] font-merri '>
                        Sign up {atCapacity && <span className="font-bold">for the waitlist </span>}to perform at The Prattic on <span className="font-bold">{dateStr}</span>. If you're just planning to watch, go to our tickets link:
                    </DialogDescription>
                </DialogHeader>

                <div className='w-full h-full flex flex-col justify-center items-center'>

                    <SketchButtonExternalLink vectorFile={"sharpButton1.svg"} width={100} href={show.eventbrite} label="Tickets" fontSize="[1.2rem]" height={30} />

                </div>

                <SignUpForm show={show} />

                
            </DialogContent>
        </Dialog>
    )
}

export default SignUpShowCard
