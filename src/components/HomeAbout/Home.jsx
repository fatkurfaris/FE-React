import style from "./Home.module.css"
import Gambar from '../../img/Capture.PNG'

export default function Home(){
    return(
        <div className={style.bg} width="100px">
            {/* <img src={Gambar}/> */}       
             <div className={style.background}>
                {/* <div className="position-absolute top-0 start-0">
                    <h5 className="position-absolute">asdas</h5>
                </div> */}
                <div className={style.test}>
                    <h1 className={style.text}>---BeeMovie---</h1>
                    <h1 className={style.text2}>a Place for watching movie with family or friend</h1>
                    <button className={style.but}><h3>About Us</h3></button>
                </div>
                
             </div>

        </div>
    )
}