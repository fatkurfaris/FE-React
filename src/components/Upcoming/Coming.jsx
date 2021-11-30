import {Row} from 'react-bootstrap'
import React from "react"
import { Container } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import style from './Coming.module.css'
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'



export const LOAD_UPCOMING = gql `
query Upcoming {
    Upcoming {
      id
      Cast
      Directors
      Duration
      Genre
      Img
      Producers
      Production
      Rate
      Sinopsis
      Title
      Trailer
      Writer
    }
  }
`

export default function Coming(){
    const {data:upData}= useQuery(LOAD_UPCOMING);
    const {testing}=useQuery(LOAD_UPCOMING);

    // if(error) {
    //     console.log(error)
    //     return null
    //   }
    //   console.log("ini upcoming");
    //   console.log({upData});

    return (
       
        <div >
            <div className={style.backg}>
                <Container className={style.cardM}>
                    <div className={style.but}> 
                        <button className={style.ton}>
                            Upcoming
                        </button>
                    </div>
                    <Row className={style.box}>
                        {upData?.Upcoming.map((c)=>(
                        <Col xs={18} md={3} className={style.space}>
                            <Card style={{ width: '18rem' }}  className={style.shadow}>
                            <Card.Img variant="top" src={c.Img} className={style.ukuran}/>
                            <Card.Body>
                                <Card.Title> <h5 className={style.text}>{c.Title}</h5> </Card.Title>
                                <Card.Text>
                                <p className={style.text}>{c.Sinopsis}</p> 
                                </Card.Text>
                                <div> <Link to={`/DescribeUpcoming/${c.id}`}><Button>Click Here</Button></Link> </div>    
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>    
        </div>
    )
}