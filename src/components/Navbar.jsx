
import { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Navbar() {
  let[show, setShow]=useState(true)
  return (


<header className='flex justify-between items-center px-5 sm:px-10 h-[87px] text-white'>
  <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setShow(!show)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    {show && (
      <div className='hidden sm:flex ml-2'>
        <Anchor to='/' className='text-[20px] px-2 w-[80px] text-center mx-1 text-white'>Home</Anchor>
        <Anchor to='/cities' className='text-[20px] px-2 w-[80px] text-center mx-1 text-white'>Cities</Anchor>
        <Anchor to='/login' className='text-[20px] px-2 w-[80px] h-[35px] text-center mx-1 text-white bg-blue-500 hover:bg-blue-700 rounded'>Login</Anchor>
      </div>
    )}
  </div>
  <h1 className='text-pink-500 font-semibold text-[18px] sm:text-[30px] px-2 mx-1 text-right mt-2 sm:mt-0'>MyTINERARIES</h1>
</header>
  )
}