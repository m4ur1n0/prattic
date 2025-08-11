import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useShow } from '@/app/context/ShowContext'


function timeFromIndex(i) {
    const ESTIMATED_SET_LENGTH = 4
    let mins = 9 * 60 + 10 + i * ESTIMATED_SET_LENGTH;
    let h = Math.floor(mins / 60) % 24;
    let m = mins % 60;
    return `${h}:${m.toString().padStart(2, '0')} PM`;
}

const ScheduleTable = () => {

    const {nextShowData, nextPerformersInOrder} = useShow();

  return (
    <div className='flex flex-col '>

        {/* ACTUAL TABLE OF PERFORMERS */}
        <div className='relative max-h-[250px] overflow-y-auto no-scrollbar'>
            <Table className="">
                <TableHeader className="sticky !bg-background top-0 z-10">
                    <TableRow className="" >
                        <TableHead className=" font-bold text-xl">Estimated Time</TableHead>
                        <TableHead className=" font-bold text-xl">Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {
                        nextPerformersInOrder ? (

                            nextPerformersInOrder.slice(1).map((performer, i) => (
                                <TableRow key={i}>
                                    <TableCell className='text-xl'>
                                        {i === 0 ? "Opener" : timeFromIndex(i)}
                                    </TableCell>
                                    <TableCell className='text-xl'>
                                        {performer["name"]}
                                    </TableCell>
                                </TableRow>
                            ))

                        ) : (
                            <TableRow>
                                <TableCell className='text-xl'>
                                    XXX
                                </TableCell>

                                <TableCell className='text-xl'>
                                    YYY
                                </TableCell>
                            </TableRow>
                        )
                        
                    }

                </TableBody>
            </Table>
        </div>

        <p className='self-center text-[1.4rem] text-gray-600 mt-5'>
            {nextShowData ? (
                    nextShowData["finalized"] ? "This is the official schedule." : "This schedule is still subject to change."
                ) : (
                    ""
                )}
        </p>
    </div>
  )
}

export default ScheduleTable
