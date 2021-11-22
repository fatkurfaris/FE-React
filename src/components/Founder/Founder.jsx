import style from './Founder.module.css'
import {Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Gambar1 from "../../img/hilmanedit.png"
import Gambar2 from "../../img/farisedit.png"
import Gambar3 from "../../img/donaedit.png"

export default function Founder(){
    return (
        <div>
            <div className={style.judul}> 
                <h1>Founder Of BeeMovie</h1>
            </div>
            <div className={style.judul}>
            <Container className={style.content}>
                <Row className={style.content}>
                    <Col ><Image src={Gambar1} width="70%" roundedCircle/>
                    <div className={style.text1}>Hilman</div>
                    <div className={style.text2}>Chief Financial Officer</div>
                    </Col>
                    <Col ><Image src={Gambar2} width="70%" roundedCircle/> 
                    <div className={style.text1}>Faris</div>
                    <div className={style.text2}>Chief Executive Officer</div>
                    </Col>
                    <Col ><Image src={Gambar3} width="70%" roundedCircle/>
                    <div className={style.text1}>Dona</div>
                    <p className={style.text2}> Chief Operating Officer</p>
                    </Col>
                </Row>
            </Container> 
            <div>
        
            </div>
        </div>
        </div>
    )
}