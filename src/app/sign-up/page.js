"use client"

import SignUpFutureShowsList from '@/components/SignUpFutureShowsList';
import SignUpHeader from '@/components/SignUpHeader';
import React from 'react'
import ShowProvider from '../context/ShowContext';

const page = () => {

  async function testPost() {

    console.log("testing post");

    const res = await fetch('../api/schedule', {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({
        post_time : new Date().toLocaleString(),
        performance_date : "Mon Aug 4 2025 21:00 GMT-0500 (Central Daylight Time)",
        name : "Theo Maurino",
        email : "thjmaurino@gmail.com",
        phone : "(413) 717-8751",
        notes : "No notes today!! :)"
      })
    });

    const data = await res.json();

    console.log(JSON.stringify(data));

  }

  return (
    <main className='signup-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center overflow-hidden'>

      <SignUpHeader />

      <ShowProvider>
        <SignUpFutureShowsList />
      </ShowProvider>

    </main>
  )
}

export default page
