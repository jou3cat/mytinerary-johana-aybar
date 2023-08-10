import React from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Carrousel({cities}) {
  return (
    <div className='flex justify-center items-center'>
     <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
     <div className='flex w-11/12 flex-wrap justify-center mt-5' >
      {cities.slice(0,4).map(each=> <Card src={each.photo} alt={each.id} text_city={each.city} text_country={each.country} />)}
    
     </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </div>
  )
}
