
import { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Navbar() {
  let[show, setShow]=useState(false)
  return (

    <header className='flex justify-start px-10 h-[87px] text-white'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " onClick={()=> setShow(!show)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (<div className='flex ms-5 '>
        <Anchor to='/' className='text-[20px] px-2 w-[80px] text-center mx-1 text-white'>Home</Anchor>
        <Anchor to='/cities' className='text-[20px] px-2 w-[80px] text-center mx-1 text-white'>Cities</Anchor>
        <Anchor to='/login' className='text-[20px] px-2 w-[80px] text-center mx-1 text-white'>Login</Anchor>
      </div>):(null)}
      <h1 className=' text-pink-500 font-semibold grow flex flex-col items-end text-[30px] px-2 w-[150px] mx-1 ' >MyTINERARIES</h1>
    </header>
  )
}
