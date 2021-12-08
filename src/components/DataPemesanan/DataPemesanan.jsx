import React from "react"
import { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { DATA_DELETE, DATA_PEMESANAN } from "../../GraphQL/Query/Query";
import Rincian from "../Details/Details";
import { useMutation, useQuery } from '@apollo/client';
import Log from "../Login/Login";
import style from './Data.module.css'
import { Button, Col, Container, Row } from "react-bootstrap";


export default function DataPemesanan(){
    // const {id}= useParams();
    // const testing = data?.Movie

    // const editPengunjung = (editUser) => {
    //     // console.log(editUser);
    //     updatePassenger({variables: {
    //         Nama: editUser.nama,
    //         Umur: editUser.umur,
    //         JenisKelamin: editUser.jenisKelamin,
    //         id: id_P
    //     }})
    // }
    const [deletedata] = useMutation(DATA_DELETE);
    const {data:pemesanan}= useQuery(DATA_PEMESANAN);
    const listData = pemesanan?.Pemesanan;

    const hapusdata = (idx) => {
        deletedata({variables: {
            id: idx
        }})
    }
    
    var userr=localStorage.getItem("username")

    // console.log("ini pertama",{pemesanan});
    console.log("ini pesanan",listData);

    return(
        <>
        {/* { console.log("coba",pesanan)} */}
        <div className={style.space}>
            <Container >
                <Row>
                    <Col sm={3} className={style.mid}>
                        <div className={style.space2}><h4>Nama</h4></div>
                    </Col>
                    <Col sm={3}>
                        <div className={style.space2}><h4>Title</h4></div>
                    </Col>
                    <Col sm={3} className={style.mid}>
                        <div className={style.space2}><h4>Seat</h4></div>
                    </Col>
                    <Col sm={3} className={style.mid}>
                        <div className={style.space2}><h4>Option</h4></div>
                    </Col>
                </Row>
            {listData?.filter(index=>index.Pemesan==userr).map((index)=>( 
            <div >
                <div className={style.list}>
                     <Row>
                            <Col sm={3} className={style.mid}>
                                <h5>{index.Pemesan}</h5>
                            </Col>
                            <Col sm={3} >
                                <h5>{index.Title}</h5>
                            </Col>
                            <Col sm={3} className={style.mid}>
                                <h5>{index.Seat}</h5>
                            </Col>
 

                            <Col sm={3} className={style.mid}>
                                <Button className={style.space3}  onClick={hapusdata(index.id)}>edit</Button>
                                <Button>Delete</Button>
                                {/* hapusPengunjung={()=> hapusPengunjung(v.id)}
                                editPengunjung={()=> editPengunjung(v.id)} */}
                            </Col>
                        </Row>
                </div>
            </div>

         ))}
         </Container>
         </div>  
        </>
    )
}