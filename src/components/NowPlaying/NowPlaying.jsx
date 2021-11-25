import {Row} from 'react-bootstrap'
import React from "react"
import { Container } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import style from './Now.module.css'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import {Link} from 'react-bootstrap'

export default function Now(){
    return (
        <div>
            <div>
                <link rel="alternate" href="atom.xml" type="application/atom+xml" title="Atom" />aa
                <link rel="stylesheet" href="Description" />click here
                <Nav.Link href="Description">Assbout</Nav.Link>
                <Container className={style.cardM}>
                    <div className={style.but}> 
                        <button className={style.ton}>
                            NowPlaying
                        </button>
                    </div>
                    <Row className={style.box}>
                        <Col xs={21} md={3} className={style.space}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link href="Description"/>Go Somewherz </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={21} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go Somewherz</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={21} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body> 
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go Somewherz</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={21} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className={style.cardN} variant=""><Nav.Link href="Description">Assbout</Nav.Link></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </div>
    )
}