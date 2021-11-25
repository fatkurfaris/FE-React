import style from "./History.module.css"
import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Placeholder} from 'react-bootstrap'
import Gambar1 from '../../img/house-g7c3307618_1920.jpg'
import Gambar2 from '../../img/house-gb7052dc36_1920.jpg'
import Gambar3 from '../../img/951140_720.jpg'

export default function History(){
    return(
        <div className={style.backg}>
            <div >
            <div className={style.History}>History</div>
                <Container>
                <Row className="justify-content-md-center">
                    <Col sm={2}></Col>
                    <Col sm={8} className="text3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                </Container> 
            </div>
            <div className={style.space}> 
                <Container className={style.space2}>
                    <Row>
                        <Col > 
                        <div  className={style.text2}>
                        <h3><b>July - December 2019</b></h3>
                        <h5>First Home Bioskop in Yogyakarta</h5>
                        </div> 
                        </Col>
                        <Col><Image src={Gambar1} roundedCircle width="300px" height="300px"/></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col> <div className={style.garis_verikal1}></div> </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Image src={Gambar2} roundedCircle width="300px" height="300px"/></Col>
                        <Col>
                        <div  className={style.text1}>
                        <h3><b>January - December 2020</b></h3>
                        <h5>BeeMovie Have a few Home Bioskop At Yogyakarta</h5>
                        </div> 
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col> <div className={style.garis_verikal1}></div> </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                        <div  className={style.text2}>
                        <h3><b>2021 -  Now</b> </h3>
                        <h5>BeeMovie Already Open At One of mall at Yogyakarta</h5>
                        </div> 
                        </Col>
                        <Col><Image src={Gambar3} roundedCircle width="300px" height="300px"/></Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        </div>
        
    )
}