import React, { useState, useEffect, useRef } from 'react';
import CityCard from '../components/CityCard.jsx';
import { useSelector,useDispatch } from 'react-redux';
import actionsCity from '../storeRedux/actionRedux/cities';
const{citiesRead}=actionsCity

export default function Cities() {
 // const [cities, setCities] = useState([]);
  const cities=useSelector(store=>store.cities.cities)
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch=useDispatch()

  console.log(cities);

  useEffect(() => {

    dispatch(citiesRead({text:text.current?.value}))
    // axios(apiUrl + 'cities?city=' + text.current.value)
    //   .then((res) => setCities(res.data.response))
    //   .catch((err) => console.log(err));
  }, [reEffect]);
  console.log(cities)
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
          className="w-full p-2 mb-4 border border-gray-300 rounded shadow-sm focu:outline-none focus:ring focus:border-blue-300 "
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
