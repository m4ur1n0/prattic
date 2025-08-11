"use client"
import React, {useState, useEffect} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useShow } from '@/app/context/ShowContext'
import { useScramble } from 'use-scramble';

const NUM_SCRAMBLE_ROWS = 6;


function timeFromIndex(i) {
    const ESTIMATED_SET_LENGTH = 4
    let mins = 9 * 60 + 10 + i * ESTIMATED_SET_LENGTH;
    let h = Math.floor(mins / 60) % 24;
    let m = mins % 60;
    return `${h}:${m.toString().padStart(2, '0')} PM`;
}

// function ScrambleCell({ finalText}) {
//     const {ref} = useScramble({
//         text : finalText || "XXXXXXXXXXXXXX",
//         speed : 0.5,
//         tick : 1,
//         seed : 1,
//         overdrive : !finalText
//     })

//     return <span ref={ref} />
// }
  
  function ScrambleCell({
    finalText,
    length = 30,
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/|',
  }) {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      if (finalText) {
        setDisplayText(finalText);
        return; // stop scrambling
      }
  
      let animationFrame;
      const scramble = () => {
        const scrambled = Array.from({ length })
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');
        setDisplayText(scrambled);
        animationFrame = requestAnimationFrame(scramble);
      };
  
      scramble();
  
      return () => cancelAnimationFrame(animationFrame);
    }, [finalText, length, chars]);
  
    return <span className='overflow-hidden'>{displayText}</span>;
  }

const ScheduleTable = () => {

    const {nextShowData, nextPerformersInOrder} = useShow();

    const loading = !nextPerformersInOrder || nextPerformersInOrder.length === 0;

    const [stoppedRows, setStoppedRows] = useState([]);


    useEffect(() => {

        if (!loading) {
            setStoppedRows([]);
            return;
        }

        const timers = [];

        for (let i = 0; i < NUM_SCRAMBLE_ROWS; i++) {

            timers.push(setTimeout(() => {
                setStoppedRows(prev => [...prev, i]);
            }, 700));

        }

        return () => timers.forEach(clearTimeout);

    }, [loading])

  return (
    <div className='flex flex-col '>

        {/* ACTUAL TABLE OF PERFORMERS */}
        <div className='relative max-h-[250px] overflow-y-auto no-scrollbar'>
            <Table className="table-fixed">
                <TableHeader className="sticky !bg-background top-0 z-10">
                    <TableRow className="" >
                        <TableHead className=" font-bold text-xl">Estimated Time</TableHead>
                        <TableHead className=" font-bold text-xl md:min-w-[200px] ">Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {
                        loading ? (

                            // show scramble
                            Array.from({length : NUM_SCRAMBLE_ROWS}).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell className="text-xl">
                                        <ScrambleCell finalText={stoppedRows.includes(i) ? `${i === 0 ? "Opener" : timeFromIndex(i)}` : undefined} />
                                    </TableCell>

                                    <TableCell className="text-xl md:min-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                        <ScrambleCell finalText={stoppedRows.includes(i) ? nextPerformersInOrder["name"] : undefined} />
                                        
                                    </TableCell>
                                </TableRow>
                            ))

                        ) : (
                            // data is ready -- show actual data
                            nextPerformersInOrder.slice(1).map((performer, i) => (
                                <TableRow key={i}>
                                    <TableCell className='text-xl'
                                    >
                                        {i === 0 ? "Opener" : timeFromIndex(i)}
                                    </TableCell>
                                    <TableCell className='text-xl md:min-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                        {performer["name"]}
                                    </TableCell>
                                </TableRow>
                            ))
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
