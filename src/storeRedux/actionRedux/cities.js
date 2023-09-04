import axios from "axios";
import apiUrl from "../../apiUrl.js"
import { createAsyncThunk } from "@reduxjs/toolkit";


//Action de carousel--------------------------------------------------
const carouselRead=createAsyncThunk(     //carouselRead es una acción asíncrona creada con createAsyncThunk.
    
    'carouselRead', //Este es el NOMBRE de la ACCION Esta será la identificación de la acción en el store de Redux.
    async()=> {
        try{
            let data=await axios (apiUrl + 'cities/carousel')   //realiza una solicitud asíncrona utilizando Axios para obtener datos de la API 
            console.log(data)
            console.log(data.data.data_carousel)
            return {
                carousel: data.data.data_carousel   //Si la solicitud tiene éxito, se registra la respuesta en la consola y se devuelve un objeto con una propiedad carouselData que contiene los datos recibidos de la API.
            
            }
        }catch(error){
            console.log(error);
            return {
                carousel:[]      //Si la solicitud falla (por ejemplo, debido a un error de red), se registra el error en la consola y se devuelve un objeto con carouselData como un arreglo vacío.
            }
        }
    }
)

//-------------------------------------------------------

// action de Cities---------------------------------------
const citiesRead=createAsyncThunk(
    'citiesRead',
    async(obj)=>{
        try{
let data= await axios(apiUrl + 'cities?city=' + obj.text)
console.log(data);
return{
    cities: data.data.response
}
        }catch(error){
            console.log(error)
            return{
                cities:[]
            }
        }
    }
)


//---------------------------------------------------------------



//Action de cityDetail---------------------------------------------------

const cityDetailRead=createAsyncThunk(
    'cityDetailRead',
    async(obj)=>{
        try{
let data= await axios.get(apiUrl + 'cities/' +obj.id)
console.log(data);
return{
    city: data.data.response
}
        }catch(error){
            console.log(error);
            return{
                city:[]
            }
        }
    }
)


//---------------------------------------------------------------------

const actionsCity={carouselRead, citiesRead, cityDetailRead}    //Las acciones creadas se exportan en un objeto actionsCity. En este caso, solo se exporta carouselRead.

export default actionsCity



