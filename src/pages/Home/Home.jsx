import React from "react";
import Footer from "../../components/Footer/Footer";
import Homess from "../../components/Home/Homess";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import Now from "../../components/NowPlaying/NowPlaying";
import Coming from "../../components/Upcoming/Coming";


export default function Home(){
    return(
        <>
            <NavbarHome/>
            <Homess/>
            <Now/>
            <Coming/>
            <Footer/>
        </>
    )
}