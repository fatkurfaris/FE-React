import {Link, useParams} from 'react-router-dom'
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import style from './Desc.module.css'
import Gambar1 from '../../img/movie-theater-g39fcba8ce_1920.jpg'

export default function DescUpcoming({UpData}){
    const {id}=useParams();
    // const Up = data.Upcoming
    console.log("ini Up");
    console.log({id});
    
    console.log({UpData});
    // console.log({Up});
    console.log({id});

    return(
        <div>
            {/* {console.log("t", Up.filter(index=>index.id==id))} */}
            {UpData.filter(index=>index.id==id).map((index,detail)=>(
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
                                        {/* <Button variant="dark">
                                            <link rel="stylesheet" href={index.Trailer} />
                                             Trailer
                                        </Button> */}
                                        <Link to={`/Description/${index.id}/Detail`}><Button>Buy Here</Button></Link>
                                    </Col>
                                    <Col className={style.kiri}>  
                                        {/* <Button variant="dark">
                                            <link rel="stylesheet" href="Description" />
                                             Buy Ticket
                                        </Button> */}
                                        <a href="index.Trailer" target="_blank" rel="noopener noreferrer">here</a>
                                        {/* <Link to={`/index.Trailer`}><Button>Trailer</Button></Link> */}
                                    </Col>
                                    {/* <Col md={6} ></Col> */}
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
                            <Col sm={3} className={style.kiri}>
                            <h6>Genre</h6>
                            <h6>Producer</h6>
                            <h6>Sutradara</h6>
                            <h6>Penulis</h6>
                            <h6>Produksi</h6>
                            <h6>Cast</h6>
                            </Col>
                            <Col sm={1}>
                            <h6>:</h6>
                            <h6>:</h6>
                            <h6>:</h6>
                            <h6>:</h6>
                            <h6>:</h6>
                            <h6>:</h6>
                            </Col>
                            <Col className={style.kiri}>
                            <h6>{index.Genre}</h6>
                            <h6>{index.Producers}</h6>
                            <h6>{index.Directors}</h6>
                            <h6>{index.Writer}</h6>
                            <h6>{index.Production}</h6>
                            <h6>{index.Cast}</h6></Col>
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
                                    {index.Sinopsis}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}