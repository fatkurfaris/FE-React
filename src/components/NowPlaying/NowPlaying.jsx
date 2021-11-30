import {Image, Row} from 'react-bootstrap'
import React from "react"
import { Container } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import style from './Now.module.css'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gql,useQuery } from '@apollo/client'
import Desc from '../Desc/Desc'


export const LOAD_MOVIE = gql `
query Movie {
    Movie {
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

export default function Now(){
    const {data,error}= useQuery(LOAD_MOVIE);

    if(error) {
        console.log(error)
        return null
      }
    //   console.log("ini now");
    //   console.log({data});
    
    return (
        <div>
            <div className={style.backg}> 
                <Container className={style.cardM}>
                    <div className={style.but}> 
                        <button className={style.ton}>
                            Now Playing
                        </button>
                    </div>        
                        <Row className={style.box}>
                        {data?.Movie.map((v)=>(
                        <Col xs={22} md={3} className={style.space}>
                            <Card style={{ width: '18rem' }} className={style.shadow} >
                            <Card.Img variant="top" src={v.Img} className={style.ukuran}/>
                            <Card.Body>
                                <Card.Title> <h5 >{v.Title}</h5> </Card.Title>
                                <Card.Text>
                                <p className={style.text}>{v.Sinopsis}</p>
                                </Card.Text>
                                <div> <Link to={`/Description/${v.id}`}><Button>Click Here</Button></Link> </div>
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