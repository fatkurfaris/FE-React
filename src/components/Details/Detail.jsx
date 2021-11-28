import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import style from './Detail.module.css'
import Gambar1 from '../../img/movie-theater-g39fcba8ce_1920.jpg'

export default function Details(){
    return(
        <div>
            <div>
                <Container className={style.space}>
                    <div>
                          <h3 className={style.text}>Title</h3>
                    </div>    
                <Row>
                    <Col xs={6} md={6}>
                      
                      <div className={style.box}>
                          <div className={style.box2}>
                            <Image src={Gambar1} width="99%   "/>
                            <Row className={style.space4}>
                                {/* <Col md={4}></Col> */}
                                <Col  className={style.mid}> 
                                    <h4>Location</h4>
                                </Col>
                                {/* <Col md={6} ></Col> */}
                            </Row>
                            <Row className={style.space4}>
                                {/* <Col md={4}></Col> */}
                                <Col  className={style.mid}> 
                                    <Button className={style.submit}>
                                        <link rel="stylesheet" href="Description" />
                                         Payment
                                    </Button>
                                </Col>
                                {/* <Col md={6} ></Col> */}
                            </Row>
                            
                          </div>

                      </div>
                    </Col>
                    <Col xs={6} md={6} className={style.space4}>

                    <div>
                        <Row>
                            <Col sm={1}></Col>
                            <Col sm={4}>
                            <h4 className={style.minute}>
                                Minute
                                </h4>
                                <h4 className={style.minute}>
                                Rate
                                </h4>
                                
                                <Button className={style.Seat}>
                                    Seat
                                </Button >
                                <h4 className={style.minute}>
                                Rp.1500000
                                </h4>
                                <Form.Select aria-label="Default select example" className={style.text1}>
                                    <option >Payment Method</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col sm={4}>
                                
                            </Col>
                            <Col sm={3}></Col>
                        </Row>
                    </div>
                    </Col>
                    
                </Row>
                </Container>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                Sinopsis
                            </Col>
                        </Row>
                        <Row>
                            <Col className={style.space5}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}