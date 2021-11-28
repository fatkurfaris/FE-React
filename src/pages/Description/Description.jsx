import React from "react";
import Desc from "../../components/Desc/Desc.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NavbarHome from "../../components/NavbarHome/NavbarHome.jsx";

import style from './Description.jsx'

export default function Description(){
    return(
        <>
            <NavbarHome/>
            <Desc/>
            <Footer/>
        </>
    )   
}       