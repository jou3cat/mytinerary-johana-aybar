import { configureStore } from "@reduxjs/toolkit";
import reducerCity from "./reducersRedux/cities";
import reducerItineraries from "./reducersRedux/itineraries";

export default configureStore({

    reducer: {
        cities:reducerCity,
        itineraries: reducerItineraries,
        //users:{}
    }

})
