import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Gambar1 from '../../img/Capture.PNG'
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={styles.bg}>
            <Container>
                <Row>
                    <Col sm={1}><Image src={Gambar1} width="100%"/> </Col>
                    <Col sm={8}></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    )
}