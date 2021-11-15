import React from 'react'
import foto from '../../img/logo-ALTA.png'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export default function navbar(){
    return (
    <div>
    <nav className="navbar navbar-expand-lg  bg-primary bg-body rounded posisi">
        <div className="container-fluid">
          <div className={style.space3}>
            <a className="navbar-brand " href="#"><img src={foto} alt="" width="60%"/></a>
          </div>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <li className="nav-item navbar-nav d-flex ">
                <div  className={style.space2}>
                    <a className={style.text}  href="/">HOME</a>
                </div>
                <div className={style.space2}>  
                    <a className={style.text} href="">ABOUT</a>
                </div>
                <div className={style.space2}>
                <a  className={style.text} href="">EXPERIENCE </a>
                </div>
                <div className={style.space} >
                <a  className={style.text} href="contact">CONTACT</a>
                </div>     
            </li>
          </div>
        </div>
    </nav>
    </div>
    )
}