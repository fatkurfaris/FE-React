import React from "react"
import style from './Layar.module.css'
import { Col, Container, Row } from "react-bootstrap"


export default function Layar(){
    return(
        <div>
            {/* <h5 className={style.space}>Back</h5>
            <h5 className={style.space}>Back</h5>
            <h5 className={style.space}>Back</h5>
            <h5 className={style.space}>Back</h5> */}
            
            <div>
                <Container>
                <h5 className={style.space}>Back</h5>
                    <div>
                        <h4 className={style.screen}>Screen</h4>
                    </div>
                </Container>
            </div>
        </div>
    )
}