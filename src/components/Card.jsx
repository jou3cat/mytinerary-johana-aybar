import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Card({ src, alt, text, id }) {
  return (
    <Anchor
      to={'/city/' + id}
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mb-4 rounded-md border border-gray-300 hover:shadow-lg hover:border-gray-400 transition duration-300'
    >
      <div className="relative rounded overflow-hidden">
        <div className="h-44">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
          <p>{text}</p>
        </div>
      </div>
    </Anchor>
  );
}