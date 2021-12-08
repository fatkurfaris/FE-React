import React from "react"
import style from './SeatEdit.module.css'
import{Row,Col, Button} from 'react-bootstrap'
import EditCheck from "./EditCheck"

export default function EditSeat({idd}){
    console.log("ini idd",idd);
    let kursiA1= "A01" 
    let kursiA2= "A02"
    let kursiA3= "A03"
    let kursiA4= "A04"
    let kursiA5= "A05"
    let kursiA6= "A06"
    let kursiA7= "A07"
    let kursiA8= "A08"
    let kursiA9= "A09"
    let kursiA10= "A10"
    let kursiA11= "A11"
    // console.log("ini kursi");
    // console.log({kursi});
    let kursiB1= "B01"
    let kursiB2= "B02"
    let kursiB3= "B03"
    let kursiB4= "B04"
    let kursiB5= "B05"
    let kursiB6= "B06"
    let kursiB7= "B07"
    let kursiB8= "B08"
    let kursiB9= "B09"
    let kursiB10= "B10"
    let kursiB11= "B11"

    let kursiC1= "C01"
    let kursiC2= "C02"
    let kursiC3= "C03"
    let kursiC4= "C04"
    let kursiC5= "C05"
    let kursiC6= "C06"
    let kursiC7= "C07"
    let kursiC8= "C08"
    let kursiC9= "C09"
    let kursiC10= "C10"
    let kursiC11= "C11"

    let kursiD1= "D01"
    let kursiD2= "D02"
    let kursiD3= "D03"
    let kursiD4= "D04"
    let kursiD5= "D05"
    let kursiD6= "D06"
    let kursiD7= "D07"
    let kursiD8= "D08"
    let kursiD9= "D09"
    let kursiD10= "D10"
    let kursiD11= "D11"

    let kursiE1= "E01"
    let kursiE2= "E02"
    let kursiE3= "E03"
    let kursiE4= "E04"
    let kursiE5= "E05"
    let kursiE6= "E06"
    let kursiE7= "E07"
    let kursiE8= "E08"
    let kursiE9= "E09"
    let kursiE10= "E10"
    let kursiE11= "E11"

    let kursiF1= "F01"
    let kursiF2= "F02"
    let kursiF3= "F03"
    let kursiF4= "F04"
    let kursiF5= "F05"
    let kursiF6= "F06"
    let kursiF7= "F07"
    let kursiF8= "F08"
    let kursiF9= "F09"
    let kursiF10= "F10"
    let kursiF11= "F11"

    return(
        <div>
            <div>
                <Row>
                {/* <Col sm={2} className={style.kanan}> 
                    <div className={style.garis_verikal1}></div>   
                </Col>
                 */}
                <Col sm={12} className={style.mid}>
                    
                    <Row className={style.space}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiA1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiA2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiA4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiA9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiA11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>
                            {/* //SECTION B */}
                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiB1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiB2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiB4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiB9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiB11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>

                    {/* //SECTION C */}
                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiC1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiC2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiC4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiC9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiC11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>

                    {/* //SECTION D */}
                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiD1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiD2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiD4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiD9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiD11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>

                    {/* //SECTION E */}
                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiE1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiE2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiE4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiE9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiE11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>

                    {/* //SECTION F */}
                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiF1}/></Col>
                        <Col sm={2}><EditCheck  kursi={kursiF2}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF3}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                     <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><EditCheck kursi={kursiF4}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF5}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF6}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF7}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF8}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><EditCheck kursi={kursiF9}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF10}/></Col>
                        <Col sm={2}><EditCheck kursi={kursiF11}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    </Row>
                    

                    

                    
                </Col>

                {/* <Row className={style.space2}>
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>G01</Button>   
                    <Button className={style.undone}>G02</Button> 
                    <Button className={style.undone}>G03</Button> 
                    <Button className={style.undone}>G04</Button> 
                    <Button className={style.undone}>G05</Button>
                    <Button className={style.undone}>G06</Button>  
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>G07</Button>   
                    <Button className={style.undone}>G08</Button> 
                    <Button className={style.undone}>G09</Button> 
                    <Button className={style.undone}>G010</Button> 
                    <Button className={style.undone}>G011</Button> 
                    </Col>
                    <Col sm={3} className={style.mid}>
                    <Button className={style.undone}>G012</Button> 
                    <Button className={style.undone}>G013</Button>   
                    <Button className={style.undone}>G014</Button> 
                    
                    </Col>
                    </Row>
                    </Col>
                </Row>

                <Row className={style.space2}>
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>H01</Button>   
                    <Button className={style.undone}>H02</Button> 
                    <Button className={style.undone}>H03</Button> 
                    <Button className={style.undone}>H04</Button> 
                    <Button className={style.undone}>H05</Button> 
                    <Button className={style.undone}>H06</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>H07</Button>   
                    <Button className={style.undone}>H08</Button> 
                    <Button className={style.undone}>H09</Button> 
                    <Button className={style.undone}>H010</Button> 
                    <Button className={style.undone}>H011</Button> 
                    </Col>
                    <Col sm={3} className={style.mid}>
                    <Button className={style.undone}>H012</Button> 
                    <Button className={style.undone}>H013</Button>   
                    <Button className={style.undone}>H014</Button> 
                    
                    </Col>
                    </Row>
                    </Col>
                </Row> */}

                </Row>
                


                <div className={style.space3}></div>


                

            </div>
        </div>
    )
}