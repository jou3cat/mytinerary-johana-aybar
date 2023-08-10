import React from 'react'

export default function Card({src, alt, text_city, text_country}) {
  return (
    <div>
      <img src={src} alt={alt} />
      <p>{text_city} - {text_country}</p>
    </div>
  )
}
