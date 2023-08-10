/*acá importo los componentes que se van a repetir en todas las paginas, como el header y el footer*/

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

export default function MainLayout({children}) {
    console.log(children);
  return (
    <div>
    < Navbar/>
     {/*Acá se debe insertar el contenido dinámico de cada vista */}   

    {children}
   
    < Footer/>
    
    
  </div>
  )
}
