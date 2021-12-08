import {Link, useParams} from 'react-router-dom'
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import style from './Detail.module.css'
import { useQuery } from '@apollo/client';
import Gambar1 from '../../img/movie-theater-g39fcba8ce_1920.jpg'
import { LOGIN } from '../../GraphQL/Query/Query';
import Rincian from '../Details/Details';

export default function Desc({data}){
    const {id}=useParams();
    const testing = data?.Movie
    const {data:loggg}= useQuery(LOGIN);
    const proses =loggg?.Login
    // console.log("login",loggg);
    var user=localStorage.getItem("username")
    var pass=localStorage.getItem("Password")

    let y;
    for (let i = 0; i < 2; i++) {
        if (proses[i].Name==user && proses[i].Password==pass) {
            y= <Link to={`/Description/${id}/Detail`}><Button>Buy Here</Button></Link>
         }else{
            y=<Link to={`/Login`}><Button>Login</Button></Link>
         }
        
    }
    // console.log(user);
    // console.log(proses.id);
    console.log("ini loggg",loggg.Login);
    // console.log("proses",{proses});
    // console.log("proses2",proses.Name);
    console.log("proses3",proses);

    return(
        <div>
            {/* {console.log("t", testing.filter(index=>index.id==id))} */}
            {testing?.filter(index=>index.id==id).map((index,detail)=>(
            <div>  
                <div>
                    <Container className={style.space}>
                    <Row>
                        <Col xs={6} md={6}>
                          <div>
                              <h3 className={style.text}>Now Playing</h3>
                          </div>
                          <div className={style.box}>
                              <div className={style.box2}>
                                <Image src={index.Img  } width="70%   "/>
                                <Row className={style.space4}>
                                    <Col  className={style.kanan}> 
                                {y}
                                    </Col>
                                    <Col className={style.kiri}>  
                                        <a href={index.Trailer} target="_blank" rel="noopener noreferrer"><Button className={style.text2}>Trailer</Button></a>
                                    </Col>
                                </Row>
                              </div>
                          </div>
                        </Col>
                        <Col xs={6} md={6} className={style.space4}>
                        <Form >
                            <FormControl
                            className={style.formm}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                        <div>
                            <h4 className={style.space3}>
                                {index.Title}
                            </h4>
                            <Rincian data={data}/> 
                        </div>
                        </Col> 
                    </Row>
                    </Container>
                </div>
            </div>
            ))}
        </div>
    )
}