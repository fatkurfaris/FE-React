import React from "react"
import Footer from "../../components/Footer/Footer"
import Layar from "../../components/Layar/Layar"
import NavbarHome from "../../components/NavbarHome/NavbarHome"
import Seat from "../../components/Seat/Seat"

export default function Screen(){
    return(
        <>
            <NavbarHome/>
            <Layar/>
            <Seat/>
            <Footer/>
        </>
    )
}