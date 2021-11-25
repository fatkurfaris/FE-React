import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Login.module.css'

export default function Login(){
    return (
        <div className={style.back}>
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col sm={2}>
                                <div className={style.text1}>
                                    <h4>Home</h4>
                                    <h4>NowPlaying</h4>
                                    <h4>Upcoming</h4>
                                    <h4>About</h4>
                                </div>
                            </Col>
                            <Col sm={3} className={style.tengah}>
                                aasds
                            </Col>
                            <Col sm={2} className={style.tengah}>
                                
                            </Col>
                            <Col sm={5}>
                                <div>
                                    <h4 className={style.text2}>-----Bioskop----</h4>
                                    <h3 className={style.text2}>BeeMovie</h3>
                                    
                                    {/* <Row> */}
                                    <label htmlFor="">Username</label><br />
                                    <input type="text" className={style.Mkanan} />   <br />
                                    {/* </Row> */}

                                    <label htmlFor="">Username</label><br />
                                    <input type="text" className={style.Mkanan} /><br />

                                    <label htmlFor="">Login</label><br />
                                    <input type="text" /><br />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}