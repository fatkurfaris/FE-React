import {Link, useParams} from 'react-router-dom'
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

export default function Desc({data}){
    const {id}=useParams();
    const testing = data.Movie

    console.log({data});

    return(
        <div>
            {/* {console.log("t", testing.filter(index=>index.id==id))} */}
            {testing.filter(index=>index.id==id).map((index,detail)=>(
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
                                <Image src={index.Img   } width="70%   "/>
                                <Row className={style.space4}>
                                    <Col  className={style.kanan}> 
                                        <Link to={`/Description/${index.id}/Detail`}><Button>Buy Here</Button></Link>
                                    </Col>
                                    <Col className={style.kiri}>  
                                        <a href={index.Trailer} target="_blank" rel="noopener noreferrer"><Button className={style.text2}>Trailer</Button></a>
                                    </Col>
                                </Row>
                              </div>
                          </div>
                        </Col>
                        <Col xs={6} md={6} className={style.space4}>
                        <Form >
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
                                {index.Title}
                            </h4>
                            <Row>
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
                        </Col> 
                    </Row>
                    </Container>
                </div>
            </div>
            ))}
        </div>
    )
}