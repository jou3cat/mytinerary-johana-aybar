
import React from 'react'
import { useState } from 'react'

export default function Navbar() {
  let[show, setShow]=useState(false)
  return (

    <header className='flex justify-start px-10 h-[87px]'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " onClick={()=> setShow(!show)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (<div className='flex ms-5 '>
        <p className='text-[20px] px-2 w-[80px] text-center mx-1 '>Home</p>
        <p className='text-[20px] px-2 w-[80px] text-center mx-1 '>Cities</p>
        <p className='text-[20px] px-2 w-[80px] text-center mx-1 '>Login</p>
      </div>):(null)}
      
    </header>
  )
}
