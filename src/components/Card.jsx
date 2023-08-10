import React from 'react'

export default function Card({src, alt, text_city, text_country}) {
  return (
    <div className='w-2/5 flex flex-col items-center p-2 n-2 space-x-1 rounded-sm border-gray-700'>
      <img src={src} alt={alt} />
      <p>{text_city} - {text_country}</p>
    </div>
  )
}
