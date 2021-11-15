import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Contact from "./page/contact_us/contact_us";
import Home from "./page/home/home";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
