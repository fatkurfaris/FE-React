import React from "react";
import DescUpcoming from "../../components/DescUpcoming/DescUpcoming";
import Footer from "../../components/Footer/Footer";
import NavbarDetail from "../../components/NavbarDetail/NavbarDetail";
import NavbarHome from "../../components/NavbarHome/NavbarHome";

export default function DescribeUpcoming(UpData){
    return(
        <>
            <NavbarDetail/>
            <DescUpcoming UpData={UpData}/>
            <Footer/>
        </>
    )
}