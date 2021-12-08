import React from "react"
import { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { PEMESANAN } from "../../GraphQL/Query/Query";
import Rincian from "../Details/Details";
import { useQuery } from '@apollo/client';
import Log from "../Login/Login";
import style from './Data.module.css'


export default function DataPemesanan({pesanan}){
    // const {id}= useParams();
    // const testing = data?.Movie
    const {data:list}= useQuery(PEMESANAN);
    const listData = list?.pesanan;
    var userr=localStorage.getItem("username")

    console.log({listData});

    console.log("ini pesanan",list);
    return(
        <>
        {list.filter(index=>index.Nama==userr).map((index)=>(    
            <div>
                berhasil
            </div>

         ))}
        <div>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <h1>Data</h1>
        <Rincian/> 
        </div>
       
   
        </>
    )
}