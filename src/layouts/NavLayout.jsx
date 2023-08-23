import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


export default function NavLayout() {
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
      <Navbar />
      {/* contenido dinamico */}
      <Outlet />
    </div>
  );
}