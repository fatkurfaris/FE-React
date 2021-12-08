import React from "react";
import DataPemesanan from "../../components/DataPemesanan/DataPemesanan";
import Footer from "../../components/Footer/Footer";
import NavbarDetail from "../../components/NavbarDetail/NavbarDetail";

export default function Data({pesanan}){
    return(
        <>
        <NavbarDetail/>
        <DataPemesanan pesanan={pesanan}/>
        <Footer/>
        </>
    )
}