"use client"

import React from 'react'

const page = () => {

  async function testPost() {

    console.log("testing post");

    const res = await fetch('../api/signup', {
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


  async function testGet() {
    const res = await fetch('../api/signup', {
      method : "GET",
      headers : {'Content-Type': 'application/json'}
    });

    const data = await res.json();

    console.log(JSON.stringify(data));
  }

  return (
    <div className="home-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center">
      xxx

      <button className='border' onClick={testPost}>Click</button>

      <button className='border' onClick={testGet}>Click</button>


    </div>
  )
}

export default page
