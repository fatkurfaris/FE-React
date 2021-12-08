import React from 'react';
import { Col, Container,  Row , Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import style from './Login.module.css'
import { useState } from "react";

export default function Log(){
    const [state, setState] = useState({
        nama: "",
        password: ""
      })

    const handleSubmit =() => {
        // let name = name; //fikry =>username login
        // let password = password; //fikryfikry =>password login
        const newData = {
            nama: state.nama,
            umur: state.password
          }
        console.log(newData);
        localStorage.setItem("username", state.nama);
        localStorage.setItem("Password", state.password);
    }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }

    
    
    return (
        <>
        <div className={style.back}>
            <Container >
                <div className={style.mid}>{/* className={style.border} */}
                    <h2 className={style.text}>LOGIN</h2>
                </div>
                
            <Row>
            <Col sm={3}></Col>
            <Col sm={6} className={style.space}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label className={style.text1}>
                        Username
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="username" name="nama" value={state.nama}  onChange={onChange}/>
                        
                        </Col>
                 </Form.Group>

                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label className={style.text1}>
                        Password
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password" name="password" value={state.password}  onChange={onChange} />
                     </Col>
                    </Form.Group>
                    <Link to={`/`}><Button variant="light" onClick={handleSubmit}>Submit</Button></Link>
                </Form>
            </Col>
            <Col sm={3}></Col>
            </Row>
            </Container>
            
        </div>
        </>
    )
}