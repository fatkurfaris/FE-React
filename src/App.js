// import Home from "./pages/About/About";
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;