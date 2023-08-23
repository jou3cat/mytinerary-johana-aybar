/*acá importo los componentes que se van a repetir en todas las paginas, como el header y el footer*/

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

export default function MainLayout() {
    
  return (
    <div className='w-full min-h-screen bg-gray-900 flex flex-col 
    sm:bg-gray-500
    md:bg-gray-700
    lg:bg-gray-900'>
    < Navbar/>
     {/*Acá se debe insertar el contenido dinámico de cada vista */}   
     < Outlet/>
    
   
    < Footer/>
    
    
  </div>
  )
}
