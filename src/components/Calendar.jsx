"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import React, { useEffect, useRef, useState } from 'react'
import { useShow } from '@/app/context/ShowContext';
import { useRouter } from 'next/navigation'

const Calendar = () => {
    const {futureShowsData} = useShow();

    const [events, setEvents] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (futureShowsData) {
            setEvents([
                ...(
                    futureShowsData.map((show) => {
                        const [month, day, year] = show.sheetName.split("_")[1].split("/");
                        const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, 0)}`;

                        return {
                            title : show.showName,
                            date: formattedDate
                        }
                    }
                )
            )])
        }
    }, [futureShowsData])

    useEffect(() => {

        const today = new Date();
        const dayOfMonth = today.getDate();


        const todayCell = document.querySelector(".fc-day-today");
        if (todayCell) {
            todayCell.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    }, [])

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            fixedWeekCount={false}
            // showNonCurrentDates={false}

            events={events}
            eventContent={(arg) => (
                <div onClick={() => router.push("/tickets")}
                    // style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem" }}
                    className='bg-gray-800 py-2 px-1 overflow-hidden cursor-pointer'
                >
                    <p className='font-merri !text-white !text-[0.5rem] text-wrap'>
                        {arg.event.title}
                    </p>
                </div>
            )}

            selectable={false}
            editable={false}
            droppable={false}
            eventClick={null}
            navLinks={false}

            headerToolbar={{
                left: "title",
                center: "",
                right: "prev,next", // no view buttons
            }}
        />

    )
}

export default Calendar
