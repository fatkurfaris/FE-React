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
import Rincian from "./Details";

export default function Details({data}){
    const {id}= useParams();
    const testing = data?.Movie
    console.log({data});
    // console.log(localStorage.getItem("Seat"));
    var retrievedObject=localStorage.getItem("Seat")
    var retrievedObject2=localStorage.getItem("username")
    // console.log({retrievedObject});

    return(
        
        <div>
             {testing?.filter(index=>index.id==id).map((index,detail)=>(
            <div>
                {/* {console.log(index)} */}
                <Container className={style.space}>
                    <div>
                          <h3 className={style.text}>{index.Title}</h3>
                    </div>    
                <Row>
                    <Col xs={6} md={6}>
                      
                      <div className={style.box}>
                          <div className={style.box2}>
                            <Image src={index.Img} width="80%   "/>
                            <Row className={style.space4}>
                            </Row>
                            <Row className={style.space4}>
                                {/* <Col md={4}></Col> */}
                                <Col  className={style.mid}>
                                <Link to={`/Description/${id}/Detail/Data`}><Button >Lihat Data</Button></Link>
                                <Confirm className={style.kiri2} index={index}/>
                                
                                </Col>
                            </Row>
                          </div>
                      </div>
                    </Col>  
                    <Col xs={6} md={6} className={style.space4}>
                    <div>
                        <Row>
                            <Col sm={6}>
                            <h4 className={style.minute}>
                                {index.Duration} Minute
                                </h4>
                                <h4 className={style.minute}>
                                {index.harga}
                                </h4>
                                
                            </Col>
                            <Col sm={6}>  
                            <h4 className={style.minute} Minute>
                                {index.Rate}
                                </h4> 
                                <Link to={`/Description/${index.id}/Detail/Screen`}><Button className={style.Seat}>Seat</Button></Link>
                            </Col>
                            {/* <Col sm={3}></Col> */}
                        </Row>
                            <Rincian data={data}/> 
                            <Row>
                                <Col sm={3} className={style.kiri}></Col>
                                <Col sm={1}><h5></h5></Col>
                                <Col className={style.kiri}></Col>
                            </Row>
                            
                            <Row>
                                <Col sm={3} className={style.kiri}> <h5>SEAT</h5></Col>
                                <Col sm={1}><h5>:</h5></Col>
                                <Col className={style.kiri}><h5>{localStorage.getItem("Seat")}</h5></Col>
                            </Row>
                    </div>
                    <Form.Select aria-label="Default select example" className={style.text1}>
                                    <option >Payment Method</option>
                                    <option value="1">{index.Pay}</option>
                    </Form.Select>
                    </Col>  
                </Row>
                </Container>
            </div>
            ))}
        </div>
    )
}