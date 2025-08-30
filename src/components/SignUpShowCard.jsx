

import React from 'react'
import SignUpForm from './SignUpForm'
import SketchButtonExternalLink from './SketchButtonExternalLink'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger  } from './ui/dialog'


const SignUpShowCard = ({show}) => {
    const dateStr = (show.sheetName.split('_')[1].split('/').slice(0,2)).join('/')

    return (

        <Dialog className="">
            <DialogTrigger asChild>
                <div className='future-show-card w-full  cursor-pointer flex items-center gap-4 px-3 py-6 border border-gray-200 rounded-md shadow-md hover:scale-1.1 bg-app-background hover:bg-app-hover transition-all duration-200 ease-in-out text-nowrap overflow-hidden'>
                    <p className='font-bold'>
                        ({dateStr})
                    </p>
                    <p className='truncate'>
                        {show.showName}
                    </p>
                </div>
            </DialogTrigger>

            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle className='font-bold text-3xl'>
                        {show.showName}
                    </DialogTitle>
                    <DialogDescription className='text-gray-700 text-[1rem] font-merri '>
                        Sign up to perform at The Prattic on <span className="font-bold">{dateStr}</span>. If you're just planning to watch, go to our tickets link:
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
