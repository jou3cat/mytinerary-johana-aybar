import Arrow from './Arrow'
import Card from './Card'
import { useState } from 'react'

export default function Carrousel({data}) {

  let [counter, setCounter]= useState(0)
  let [counterTo, setCounterTo]= useState(4)
    
  function next_slide(){

      if(data.length<=counterTo){
        setCounter(0)
        setCounterTo(4)
      }else{
        setCounter(counter + 4)
        setCounterTo(counterTo + 4)
      }
      
    }

  function previous_slide(){
    
    if(counter<=0){
      setCounter(data.length -4)
      setCounterTo(data.length)
    }else{
      setCounter(counter - 4)
      setCounterTo(counterTo - 4)
    }
  
  }

  return (
    <div className='flex justify-center items-center'>
     <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={previous_slide} />
     <div className='flex w-11/12 flex-wrap justify-center mt-5' >
      {data.slice(counter,counterTo).map(each=> <Card src={each.photo} alt={each.id} text={each.city} />)}
    
     </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
      </div>
  )
}
