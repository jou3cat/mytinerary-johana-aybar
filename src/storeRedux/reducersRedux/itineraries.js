import { createReducer } from "@reduxjs/toolkit";
import actionsItineraries from "../actionRedux/itineraries";

const{itinerariesRead}=actionsItineraries; 

const initialState={
    itineraries:[]
}

// Reducer itineraries------------------------------------------------
const reducerItineraries=createReducer(
    initialState,
    builder=> builder.addCase(
        itinerariesRead.fulfilled ,  
        (state, action) =>{
            let newState= {
                ...state,
                itineraries: action.payload.itineraries
            }
            return newState
        }
    ) 
)


export default reducerItineraries

