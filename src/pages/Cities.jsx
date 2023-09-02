import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import CityCard from '../components/CityCard.jsx';

export default function Cities() {
  const [cities, setCities] = useState([]);
  const text = useRef();
  const [reEffect, setReEffect] = useState(true);

  useEffect(() => {
    axios(apiUrl + 'cities?city=' + text.current.value)
      .then((res) => setCities(res.data.response))
      .catch((err) => console.log(err));
  }, [reEffect]);

  function handleFilter() {
    setReEffect(!reEffect);
  }

  return (
    <>
      <div className='w-full font-bold text-center text-white p-2'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl p-4'>Cities</h1>
          <h2 className='p-2'>Collection of the most beautiful places and experiences</h2>
      </div>

      <div id='Buscador' className="container mx-auto" >
        <input
          ref={text}
          type="text"
          name="text"
          id="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          onKeyUp={handleFilter}
          placeholder="Search cities"
        />
        <div className=" flex flex-wrap">
          {cities.map((each) => (
            <CityCard key={each._id} city={each}
            src={each.photo}
            alt={each._id}
            text={each.city}
            id={each._id}

            />
          ))}
        </div>
      </div>
    </>
  );
}
