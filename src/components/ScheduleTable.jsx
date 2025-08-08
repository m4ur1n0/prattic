import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useShow } from '@/app/context/ShowContext'

const ScheduleTable = () => {

    const {nextShowData} = useShow();

  return (
    <Table>
        <TableCaption className="text-lg">
            {nextShowData ? (
                nextShowData["finalized"] ? "This is the official schedule." : "This schedule is still subject to change."
            ) : (
                ""
            )}
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="font-bold text-xl">Time</TableHead>
                <TableHead className="font-bold text-xl">Name</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>

            <TableRow>
                <TableCell className="text-xl">Opener</TableCell>
                <TableCell className="text-xl">Luca Hirsch</TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="text-xl">9:10 PM</TableCell>
                <TableCell className="text-xl">Bobby Dazzler</TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="text-xl">9:15 PM</TableCell>
                <TableCell className="text-xl">Starlight Laughter</TableCell>
            </TableRow>

        </TableBody>
    </Table>
  )
}

export default ScheduleTable
