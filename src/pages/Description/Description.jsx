import React from "react";
import Desc from "../../components/Desc/Desc.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NavbarHome from "../../components/NavbarHome/NavbarHome.jsx";
import Now from "../../components/NowPlaying/NowPlaying.jsx";
// import { LOAD_MOVIE } from "../../GraphQL/Graph/query.jsx";

import style from './Description.jsx'

export default function Description({data}){
    return(
        <>
            {/* <NavbarHome/> */}
            <Desc data={data}/>
            <Footer/>
        </>
    )       
}       