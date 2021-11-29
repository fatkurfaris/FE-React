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

// import { LOAD_MOVIE } from '../../GraphQL/Graph/query'
// import {Link} from 'react-bootstrap'

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

    
    return (
        <div>
            <div className={style.backg}> 
                <Container className={style.cardM}>
                    <div className={style.but}> 
                        <button className={style.ton}>
                            NowPlaying
                        </button>
                    </div>        
                        <Row className={style.box}>
                        {data?.Movie.map((index,keys)=>(
                        <div key={index}>
                        <Col xs={22} md={3} className={style.space}>
                            <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={index.Img} />
                            <Card.Body>
                                <Image src="http://image-react.rf.gd/dune.jpg"/>
                                <img src={index.Img} alt="" />
                                <Card.Title> <h5 >{index.Title}</h5> </Card.Title>
                                <Card.Text>
                                <p className={style.text}>{index.Sinopsis}</p>
                                </Card.Text>
                                <div> <Link to={`/Desc/${index.id}`}><Button>Click Here</Button></Link> </div>
                                {/* <Desc
                                id={v.id}
                                Cast={v.Cast}
                                Director={v.Director}
                                Duration={v.Duration}
                                Genre={v.Genre}
                                Img={v.Img}
                                Producers={v.Producers}
                                Production={v.Production}
                                Rate={v.Rate}
                                Sinopsis={v.Sinopsis}
                                Title={v.Title}
                                Trailer={v.Trailer}
                                Writer={v.Writer}
                                /> */}
                                {/* <div> <Link to={"/Description/"+v.id}><Button>{data? <Desc v={v.id}/> : null}</Button></Link> </div> */}
                                
                                {/* <Button variant="primary"><link href={"/id/"+v.id}/>{v.Title} </Button> */}
                            </Card.Body>
                            </Card>
                        </Col>
                        </div>
                        ))}
                        </Row>    
            </Container>
            </div>    
        </div>
    )
}