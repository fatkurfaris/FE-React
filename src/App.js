// import Home from "./pages/About/About";
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Description from "./pages/Description/Description";
import Login from "./pages/Login/Login";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Description" element={<Description/>} />
      <Route path="/Movie" element={<Home/>} />
      <Route path="/Upcoming" element={<Home/>} />
      
    </Routes>

  </BrowserRouter>
  );
}

export default App;