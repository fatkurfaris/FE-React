import style from "./Home.module.css"
import {Container} from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Gambar from "../../img/951140_720.jpg"

export default function Homess(){
    return(
        <div className={style.bg}>
             <Container className={style.space} bg="light">
                <Row>
                    <Col sm={1}>

                    </Col>
                    <Col sm={7}>
                    <div>
                        <h4 className={style.text1}>Welcome to BeeMovie</h4>
                        <h4 className={style.text4}> A Place for Enjoy and Watching some Movie</h4>
                        <h4 className={style.text5}>with Our Family or Friend</h4>
                        
                        <div className={style.space1}>
                            <input className={style.box} type="text" placeholder="Search Title"/>
                        </div>
                    </div>
                    </Col>
                    {/* <Col>
                        <Image src={Gambar} roundedCircle width="300px" height="300px"/>
                    </Col> */}
                    <Col sm={4} className={style.space2}>
                        <Image src={Gambar} roundedCircle width="400px" height="400px"/>
                    </Col>
                    <Col sm={1}>

                    </Col>
                </Row>
            </Container>

        </div>
    )
} 