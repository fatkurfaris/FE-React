import React from 'react'
import { Col, Container,  Row , Form, Button} from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Log from '../../components/Login/Login'
import Navbars from '../../components/Navbar/Navbar'
import NavbarHome from '../../components/NavbarHome/NavbarHome'
import style from './Login.module.css'

export default function Login(){
    return (
        <>
        <NavbarHome/>
        <Log/>
        <Footer/>
        </>
    )
}