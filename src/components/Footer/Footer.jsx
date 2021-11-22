import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Gambar1 from '../../img/Capture.PNG'
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={styles.bg}>
            <Container className={styles.space}>
                <Row>
                    <Col sm={1}><Image src={Gambar1} width="200%"/> </Col>
                    <Col sm={8}></Col>
                    <Col sm={2} className={styles.text3}>Home|| NowPlaying||Upcoming||</Col>
                </Row>
                <Row>
                    <Col sm={4} className={styles.text1}> Pramuka no 7, mlati, sinduadi Sleman, Yogyakarta </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}></Col>
                </Row>
                
                <Row className={styles.space1}>
                    <Col sm={4} className={styles.text1}> 085388177877 || BeeMovie_YK@gmail.com</Col>
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