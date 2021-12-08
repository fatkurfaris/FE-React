import React from "react"
import { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { Container, Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import style from './Detail.module.css'
import Gambar1 from '../../img/movie-theater-g39fcba8ce_1920.jpg'
import Confirm from "../Confirm/Confirm";

export default function Rincian({data}){
    const {id}= useParams();
    const testing = data?.Movie
    // console.log({data});
    // console.log(localStorage.getItem("Seat"));
    var retrievedObject=localStorage.getItem("Seat")
    var retrievedObject2=localStorage.getItem("username")
    // console.log({retrievedObject});
    return(
        <>
        {testing?.filter(index=>index.id==id).map((index,detail)=>(
            <div>
                {/* {console.log(index)} */}
                <Container  >
                <Row>  
                    <div>
                        <Row className={style.space6}>
                                <Col sm={3} className={style.kiri}> <h5>Genre</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Genre}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Producer</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Producers}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Director</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Directors}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Writer</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Writer}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Production</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Production}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Castn</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Cast}</h5></Col>
                            </Row>
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>Sinopsis</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{index.Sinopsis}</h5></Col>
                            </Row>
                    </div>
                </Row>
                </Container>
            </div>
            ))}
        </>
    )
}