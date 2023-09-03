import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Login from "./pages/Login";
import Itineraries from "./pages/Itineraries";
import CityDetails from "./pages/CityDetails";
import MainLayout from "./layouts/MainLayout";
import NavLayout from "./layouts/NavLayout"





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Home />},
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/cities", element: <Cities />},
        { path: "/login", element: <Login />},
        { path: "/city/:city_id", element: <CityDetails />},
        { path: "/itineraries/:city_id", element: <Itineraries />}
      
    ], 
  },
  {
    path: "/",
    element: <NavLayout />,
    children: [{
      path: "/layout", element: <Itineraries />
    }],
  },
  {
    path: "/itineraries/:city_id",
    element: <Itineraries />
  },

  {
    path: "/city/:city_id",
    element: <CityDetails />
  }

]);



export default router;