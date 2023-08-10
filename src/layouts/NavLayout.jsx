import React from 'react'
import Navbar from '../components/Navbar'

export default function NavLayout({children}) {
  return (

    <div className='w-full min-h-screen bg-gray-900 flex flex-col text-white'>
    
        <Navbar/>
        {children}
        
    </div>

    
  )
}
