import {Row} from 'react-bootstrap'
import React from "react"
import { Container } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import style from './Coming.module.css'

export default function Coming(){
    return (
        <div>
            <div>
                <Container className={style.cardM}>
                    <div className={style.but}> 
                        <button className={style.ton}>
                            <link rel="style    sheet" href="Description" />Upcoming
                        </button>
                    </div>
                    <Row className={style.box}>
                        <Col xs={18} md={3} className={style.space}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link rel="stylesheet" href="Description" />Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={18} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link rel="stylesheet" href="Description" />Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={18} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link rel="stylesheet" href="Description" />Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={18} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link rel="stylesheet" href="Description" />Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={18} md={3} className={style.space}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary"><link rel="stylesheet" href="Description" />Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </div>
    )
}