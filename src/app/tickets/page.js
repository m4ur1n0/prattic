"use client"
import TicketsContent from '@/components/TicketsContent'
import React from 'react'


const page = () => {
  return (
    <main className="schedule-page-full w-dvw h-dvh flex flex-col items-center justify-between overflow-hidden">
        <div className="w-full max-w-md h-full flex flex-col items-center px-4">
            <TicketsContent />
        </div>
        
    </main>
  )
}

export default page
