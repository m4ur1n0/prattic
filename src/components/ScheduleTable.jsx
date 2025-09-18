"use client"
import React, {useState, useEffect, useMemo} from 'react'
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
import {motion} from 'framer-motion'

const NUM_SCRAMBLE_ROWS = 6;


function timeFromIndex(i, startHour=9) {
    const ESTIMATED_SET_LENGTH = 4
    let mins = startHour * 60 + 10 + i * ESTIMATED_SET_LENGTH;
    let h = Math.floor(mins / 60) % 24;
    let m = mins % 60;
    return `${h}:${m.toString().padStart(2, '0')} PM`;
}

function timeStringToHour(str) {
    // expects format "H:MM" (24HOUR TIME -- but we just throw PM at the end anyway lol)
    const [h, m] = str.split(":").map(Number);
    return h + (m / 60);
}



const ScrambleText = ({ text, loading }) => {
    const { ref } = useScramble({
      text: text,
      speed: 1,           
      tick: 1, // smooth updates
      step: 3, // slow resolve
      overflow: 5,          
      scramble: loading ? 9999 : 5, // 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/|'
      chance: 1,
      range: [65, 125], // allow wider scramble spread
      overdrive: false
    });
  
    return <span ref={ref} />;
};

const ScheduleTable = () => {

    const {nextShowData} = useShow();
    const [actualStartTime, setActualStartTime] = useState(9);

    // const [nextPerformersInOrder, setNextPerformersInOrder] = useState([]);    
    const loading = !nextShowData;

    const tableList = useMemo(() => {
        if (nextShowData) {
            return nextShowData.performers?.map(p => p["name"]) || [];
        }
        else { 
            return Array.from({length : NUM_SCRAMBLE_ROWS}, () => "LOADING");
        }
    }, [nextShowData, loading]);

    useEffect(() => {
        if (nextShowData) {
            if (nextShowData.startTime !== "9:00") {
                setActualStartTime(timeStringToHour(nextShowData.startTime));
            }
        }
    }, [nextShowData]);

  return (
    <section className='flex-1 max-h-[65dvh] w-full flex flex-col justify-between overflow-hidden'>

        {/* ACTUAL TABLE OF PERFORMERS */}
        <div className='relative overflow-y-auto h-[40dvh] no-scrollbar'>
            <Table className="table-fixed w-full">
                <TableHeader className="sticky !bg-background top-0 z-20 thead-shadow"
                >
                    <TableRow>
                        {(loading || nextShowData.finalized) && <TableHead className=" font-bold text-2xl">Estimated Time</TableHead>}
                        <TableHead className=" font-bold text-2xl md:min-w-[200px] ">{(loading || nextShowData.finalized) ? "Name" : "Current Performers"}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >

                    {
                        tableList.map((text, i) => (
                            <TableRow key={i} className=" !bg-background hover:!bg-app-hover px-1">
                                { (loading || nextShowData.finalized) && 
                                    <TableCell className="text-xl ">
                                        <ScrambleText text={loading ? "XXX" : (i === 0 ? "Opener" : timeFromIndex(i, actualStartTime))} loading={loading} />
                                    </TableCell>
                                }
                                <TableCell className='text-xl '>
                                    <ScrambleText text={text} loading={loading} />
                                </TableCell>
                            </TableRow>
                        ))
                    }

                    {
                        (!loading && tableList.length < 6) &&
                        Array.from({length : (6 - tableList.length)}).map((e, i) => (
                            <TableRow key={i} className=" !bg-background hover:!bg-app-hover px-1">
                                { (loading || nextShowData.finalized) && 
                                    <TableCell className="text-xl ">
                                        {/* <ScrambleText text={loading ? "XXX" : (i === 0 ? "Opener" : timeFromIndex(i, actualStartTime))} loading={loading} /> */}
                                        <p>...</p>
                                    </TableCell>
                                }
                                <TableCell className='text-xl '>
                                    {/* <ScrambleText text={text} loading={loading} /> */}
                                    <p>...</p>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>


        {
            nextShowData &&
            (
                nextShowData["finalized"] ?

                <motion.p className='self-center text-[0.8rem] font-merri text-gray-700 mt-8 rounded-full px-6 py-1'
                    style={{
                        border : "2px solid rgb(42, 161, 74, 0.6)",
                        backgroundColor : "rgb(42, 161, 74, 0.2)"
                    }}
                    initial={{
                        opacity : 0,
                        scale : 0.8
                    }}
                    animate={{
                        opacity : 1,
                        scale : 1,
                    }}
                    transition={{
                        duration : 0.3,
                        ease : "easeInOut"
                    }}
                >
                    This is the official schedule.
                </motion.p>

                :

                <motion.p className='self-center text-[0.8rem] font-merri text-gray-700 mt-8 border-2 rounded-full px-6 py-1'
                    style={{
                        border : "2px solid rgb(179, 59, 50, 0.6)",
                        backgroundColor : "rgb(179, 59, 50, 0.2)"
                    }}
                    initial={{
                        opacity : 0,
                        scale : 0.8
                    }}
                    animate={{
                        opacity : 1,
                        scale : 1,
                    }}
                    transition={{
                        duration : 0.3,
                        ease : "easeInOut"
                    }}
                >
                    This schedule is still subject to change.
                </motion.p>
                        

            )
        }
    </section>
  )
}

export default ScheduleTable
