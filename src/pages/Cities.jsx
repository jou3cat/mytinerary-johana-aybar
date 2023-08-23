import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'


export default function Cities() {
  const [cities,setCities]=useState([])
  const text=useRef()
  const [reEffect, setReEffect]=useState(true)
  useEffect(
    ()=>{  
      axios(apiUrl + 'cities?city=' + text.current.value)
      //.then(res=>console.log(res.data.response))
      .then(res=>setCities(res.data.response))
      .catch(err=>console.log(err))
    },[reEffect]
  )
  function handleFilter(){
console.log(text.current.value);
setReEffect(!reEffect)
  }
  return (
    <>
    <input ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} />
    {  cities.map(each=> <p className='text-white' Key={each.id}>  {each.city} </p> )}
    </>
  )
}