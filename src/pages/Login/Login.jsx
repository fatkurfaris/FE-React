import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, Container,  Row , Form} from 'react-bootstrap'
import Navbars from '../../components/Navbar/Navbar'
import style from './Login.module.css'

export default function Login(){
    return (
        <div className={style.back}>
            <Container>
                <div className={style.mid}>
                    <h2 className={style.text}>LOGIN</h2>
                </div>
            
            <Row>
            <Col sm={3}></Col>
            <Col sm={6} className={style.space}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label className={style.text1}>
                        Email
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="email" placeholder="email" />
                        </Col>
                 </Form.Group>

                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label className={style.text1}>
                        Password
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password" />
                     </Col>
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
            </Col>
            <Col sm={3}></Col>
            </Row>
            </Container>
            
        </div>
    )
}