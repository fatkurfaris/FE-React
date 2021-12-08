import React from "react"
import EditSeat from "../../components/DataPemesanan/EditSeat"
import Footer from "../../components/Footer/Footer"
import Layar from "../../components/Layar/Layar"
import NavbarHome from "../../components/NavbarHome/NavbarHome"
import Change from "../../components/Seat/Change"
import Seat from "../../components/Seat/Seat"

export default function ScreenEdit(){
    return(
        <>
            <NavbarHome/>
            <Layar/>
            <EditSeat/>
            {/* <Change/> */}
            <Footer/>
        </>
    )
}