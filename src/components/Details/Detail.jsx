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

export default function Detail(){
    return(
        <div>
            <div>
                <Container className={style.space}>
                <Row>
                    <Col xs={6} md={6}>
                      <div>
                          <h3 className={style.text}>Now Playing</h3>
                      </div>
                      <div className={style.box}>
                          <div className={style.box2}>
                            <Image src={Gambar1} width="99%   "/>
                            <Row className={style.space4}>
                                {/* <Col md={4}></Col> */}
                                <Col  className={style.kanan}> 
                                    <Button variant="dark">
                                        <link rel="stylesheet" href="Description" />
                                         Trailer
                                    </Button>
                                </Col>
                                <Col className={style.kiri}>  
                                    <Button variant="dark">
                                        <link rel="stylesheet" href="Description" />
                                         Buy Ticket
                                    </Button>
                                </Col>
                                {/* <Col md={6} ></Col> */}
                            </Row>
                          </div>

                      </div>
                    </Col>
                    <Col xs={6} md={6} className={style.space4}>
                    <Form className={style.formm}>
                        <FormControl
                        className={style.formm}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <div>
                        <h4 className={style.space3}>
                            Title
                        </h4>
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