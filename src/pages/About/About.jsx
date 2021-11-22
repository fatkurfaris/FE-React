import React from "react";
import Footer from "../../components/Footer/Footer";
import Founder from "../../components/Founder/Founder";
import History from "../../components/History/History";
import Home from "../../components/HomeAbout/Home";
import Navbars from "../../components/Navbar/Navbar";



export default function About(){
    return (
        <>
        <Navbars/>
        <Home />
        <Founder/>
        <History/>
        <Footer/>
        </>
    )
}