import { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";

import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import actionsCity from "../storeRedux/actionRedux/cities";
import store from "../storeRedux/store";

const{carouselRead}=actionsCity;

export default function Home() {

  const carousel= useSelector(store=>store.cities.carousel)
  console.log(carousel)
  const dispatch= useDispatch()

  useEffect(() => {
   
    if (carousel.length===0){
      dispatch(carouselRead())
    }

      //  axios(apiUrl + 'cities/carousel')
      //      .then(res => setData(res.data.data_carousel))
      //      .catch(err => console.log(err))
  }, [])

  console.log(carousel)

  return (
    <div id="cuerpo" className="w-full h-full flex justify-center items-center">
      <div className="w-11/12 text-center">
        <h1 className="text-white font-bold text-center py-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          "Find your perfect trip, designed by insiders who know and love their cities!"
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="items-center w-full sm:w-3/12 mb-4 sm:mb-0">
             <div className="max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <div className="px-6 py-4">
                  <h2 className="font-semibold text-2xl text-white mb-2">Find the perfect destination</h2>
                  <p className="text-gray-400 text-base">
                    Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <Anchor to='/cities' className='inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>View More</Anchor>
                </div>
              </div>
            </div>

            <div className="grow w-full sm:w-8/12">
            
              <Carrousel data={carousel} />
            
            </div>
          </div>
        </div>
      </div>

  );
}
