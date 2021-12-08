import React from "react"
import { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { DATA_DELETE, DATA_EDIT, DATA_PEMESANAN } from "../../GraphQL/Query/Query";
import Rincian from "../Details/Details";
import { useMutation, useQuery } from '@apollo/client';
import Log from "../Login/Login";
import style from './Data.module.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import { getInclusionDirectives } from "@apollo/client/utilities";
import EditSeat from "./EditSeat";


export default function DataPemesanan(){
    const {id}= useParams();
    const [state, setState] = useState({
        editing: true,
      });

    const [deletedata] = useMutation(DATA_DELETE);
    const [editdata] = useMutation(DATA_EDIT);

    const {data:pemesanan}= useQuery(DATA_PEMESANAN);
    const listData = pemesanan?.Pemesanan;

    const hapusdata = (idx) => {
        deletedata({variables: {
            id: idx,
        }})
    }

    const dataedit = (editUser) => {
        // console.log(editUser);
        var kursii=localStorage.getItem("Seat")
        editdata({variables: {
            Seat: kursii,
        }})

    }
    
    var userr=localStorage.getItem("username")

    // console.log("ini pertama",{pemesanan});
    // console.log("ini pesanan",listData);
    let viewMode = {};
    let editMode = {};

    const handleBukaInput = () => {
        setState({
          ...state,
          editing: false,
        });
      };
    if (state.editing) {
        viewMode.display = "none";
      } else {
        editMode.display = "none";
      }

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
                                {/* <Button className={style.space3} >edit</Button> */}
                                <Link to={`/Description/${id}/Detail`}><Button  onClick={()=>hapusdata(index.id)}>Delete </Button></Link>
                                
                                {/* <Link to={`/Description/${id}/Detail`}>
                                    <Button onClick={()=>dataedit(index.id)}>Edit</Button>
                                    
                                </Link> */}
                                <Button onClick={handleBukaInput} style={editMode}>Edit</Button>
                                
                                <Link to={`/Description/${id}/Detail`}><Button  >Tambah </Button></Link>
                                {/* hapusPengunjung={()=> hapusPengunjung(v.id)}
                                editPengunjung={()=> editPengunjung(v.id)} */}
                            </Col>
                        </Row>
                </div>
            </div>
            
         ))}
        {listData?.filter(index=>index.Pemesan==userr).map((index)=>( 
         <div style={viewMode}>
            <EditSeat dataedit={()=>dataedit(index.id)}/>
        </div>
        ))}
         </Container>
         </div>  
        </>
    )
}