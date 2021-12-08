import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Gambar1 from '../../img/Capture.PNG'
import Gambar2 from '../../img/facebook.png'
import Gambar3 from '../../img/whatsapp-logo-1.png'
import Gambar4 from '../../img/instagramm.png'
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={styles.bg}>
            <Container className={styles.space} >
                <Row>
                    <Col sm={4} className={styles.text1}> <Image src={Gambar1} width="50%"/> </Col>
                    <Col sm={4}></Col>
                    <Col sm={4} className={styles.text3}>Home || NowPlaying || Upcoming || <br /> 
                        {/* <Image src={Gambar4} width="11%"/> 
                        <Image src={Gambar3} width="9%"/>
                        <Image src={Gambar2} width="11%"/> */}
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className={styles.text1}> Pramuka no 7, mlati, sinduadi Sleman, Yogyakarta <br  /> 085388177877 || BeeMovie_YK@gmail.com</Col>
                    <Col sm={4}></Col>
                    <Col sm={4} className={styles.text3}>
                        <Col></Col>
                        <Col>
                            <Image src={Gambar4} width="11%"/> 
                            <Image src={Gambar3} width="9%"/>
                            <Image src={Gambar2} width="11%"/>
                        </Col>
                    </Col>
                </Row>
                
                <Row className={styles.space1}>
                    <Col sm={4} className={styles.text1}> </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}></Col>
                </Row>
                <Row className={styles.space2}>
                    <Col sm={4}></Col>
                    <Col sm={4} className={styles.text1}>Privacy</Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </div>
    )
}