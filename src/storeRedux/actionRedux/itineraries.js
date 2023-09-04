import axios from "axios";
import apiUrl from "../../apiUrl.js"
import { createAsyncThunk } from "@reduxjs/toolkit";


//Action de carousel--------------------------------------------------
const itinerariesRead=createAsyncThunk(     //carouselRead es una acción asíncrona creada con createAsyncThunk.
    
    'itinerariesRead', //Este es el NOMBRE de la ACCION Esta será la identificación de la acción en el store de Redux.
    async(obj)=> {
        try{  
            let data= await axios(apiUrl + 'itineraries?itineraries=' + obj.text) //realiza una solicitud asíncrona utilizando Axios para obtener datos de la API 
            console.log(data)
            return {
                itineraries: data.data.itineraries   //Si la solicitud tiene éxito, se registra la respuesta en la consola y se devuelve un objeto con una propiedad carouselData que contiene los datos recibidos de la API.
            
            }
        }catch(error){
            console.log(error);
            return {
                itineraries:[]      //Si la solicitud falla (por ejemplo, debido a un error de red), se registra el error en la consola y se devuelve un objeto con carouselData como un arreglo vacío.
            }
        }
    }
)

const actionsItineraries={itinerariesRead}    //Las acciones creadas se exportan en un objeto actionsCity. En este caso, solo se exporta carouselRead.

export default actionsItineraries


