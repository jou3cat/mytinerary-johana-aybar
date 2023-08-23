import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Login from "./pages/Login";
import CityDetails from "./pages/CityDetails";
import MainLayout from "./layouts/MainLayout";





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
        { path: "/city/:city_id", element: <CityDetails />}
    ], 
  },
  
]);

export default router;