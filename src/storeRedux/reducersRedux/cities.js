import { createReducer } from "@reduxjs/toolkit";
import actionsCity from "../actionRedux/cities";

const{carouselRead, citiesRead, cityDetailRead}=actionsCity; 

const initialState={
    carousel:[],
    cities:[],
    cityDetail:[]
}

// Reducer carousel------------------------------------------------
const reducerCity=createReducer(
    initialState,
    builder=> builder.addCase(
        carouselRead.fulfilled ,  
        (state, action) =>{
            let newState= {
                ...state,
                carousel: action.payload.carousel
            }
            return newState
        }
    ) 


//-----------------------------------------------------

//Reducer cities---------------------------------------

// const reducerCities=createReducer(
//     initialState,
//     builder=> builder
    
    .addCase(
        citiesRead.fulfilled ,  
        (state, action) =>{
            let newState= {
                ...state,
                cities: action.payload.cities
            }
            return newState
        }
    ) 

   

//-------------------------------------------------------


//reducer CityDetail-------------------------------------

.addCase(
    cityDetailRead.fulfilled ,  
    (state, action) =>{
        let newState= {
            ...state,
            city: action.payload.city
        }
        return newState
    }
) 
//--------------------------------------------------------
)

export default reducerCity

