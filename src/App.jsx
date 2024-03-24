import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import Booking from "./components/Booking";

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

export default function App(){
  return(
  <BrowserRouter> 
  <Navbar />
    <Routes>
      <Route>
      
        <Route index element={<Main/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Booking" element={<Booking/>} />
        

      </Route>
    </Routes>
  </BrowserRouter>
  );
}