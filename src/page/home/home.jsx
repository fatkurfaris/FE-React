import React from "react"
import style from "./style.module.css"
import foto from '../../img/foto.jpg'
import Timer from "../../component/Timer/timer"
import Navbar from "../../component/navbar/navbar"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" /> */}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


export default function Home(){
    return(
    <div>
    <Navbar/>
    <div className={style.bg}>
        <div className='position-absolute top-4 end-0'><Timer/></div>    
        <div className="container row">
            <div className="row">
            <div className="col-1"></div>
            <div className="col-4" > 
                <div className= {style.image2}>
                    <img src={foto} width="100%" alt=""  className="rounded-circle"  />
                    </div>
            </div>
            <div className="col-7">
                <h3 className={style.text3}>`Hi, my name is </h3>
                <h3 className={style.text4}>Anne Sullivan </h3>
                <h3 className={style.text5}>I build things for the web </h3>
                <a className={style.gettouch} href="contact"><button className= {style.space5}>Get in Touch</button></a>
            </div>
            </div>
        </div> 
        </div>
        </div>
    )
}