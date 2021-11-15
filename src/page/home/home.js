import React from "react"
import style from "./style.css"
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
    <div >
        
        <div className="container row">
            <div className="row">
            <div className="col-1"></div>
            <div className="col-4"> 
                <img src="img/foto.jpg" width="100%" alt="" className="posisi image2 rounded-circle" />
            </div>
            <div className="col-7">
                <h3 className={style.text3}>`Hi, my name is </h3>
                <h3 className={style.text4}>Anne Sullivan </h3>
                <h3 className={style.text5}>I build things for the web </h3>
                {/* <button className= {style.space5-button}><a className={style.button-get-in-touch} href="contact_us.html">Get in Touch</a></button> */}
            </div>
            </div>
        </div> 
        </div>
    )
}