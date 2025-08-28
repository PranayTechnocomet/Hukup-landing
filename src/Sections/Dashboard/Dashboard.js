import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar/Navbar'
export default function Dashboard() {
  return (
    <>
      <div>
        <div className='w-full h-[100vh] dashboard-bg-img'>
            <Navbar/>
        </div>
      </div>
    </>
  )
}
