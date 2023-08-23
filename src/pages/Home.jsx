import { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";


export default function Home() {
    const[show, setShow]=useState(true)
    const[data, setData]=useState([])
    
    
  //acá estaba harcodeado el arreglo de ciudades const cities
  useEffect( 
    ()=>{
        axios('/data.json')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },//callback que no debe retornar nada y no debe ser asincrona
    []          //array de dependencias
                //cuando esta vacio el efecto se ejecuta una unica vez cuando se monta el componente
                //cuando tiene variables de dependencias el efecto se ejecuta cada vez que varia /cambia alguna de esas variables 
  //[show]  ejemplo: cada vez que el booleano cambie, se ejecuta la callback 
                ) 


  return (
    <div className=" grow flex flex-col bg-gray-900 items-center">
 
   {show ? (<input type="button" onClick={()=>setShow(!show)} value="hide" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full "/>):(<input type="button" onClick={()=>setShow(!show)} value="show" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"/>)}
   {show ? <Carrousel data={data}/> : <h1 className="text-[24px] text-white">Find your perfect trip, designed by insiders who know and love their cities!</h1>}
   
    </div>
  )
}
