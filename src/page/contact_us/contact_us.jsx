import React from "react"
import style from "./contact.module.css"
import foto from "../../img/image.jpg"
import foto2 from "../../img/logo-ALTA-v2.png"
import Forms from "../../component/Form/Form"

export default function contact(){
    return(
        <div className={style.box}>
        <div className="row ">
          <div className="col-4 ">
            <div className={style.logo}>
                <img src={foto} alt="" width="600px" height="850px"/>
                <div className=" position-absolute top-0 start-0">
                    <div className={style.logo}>
                        <img className="position-absolute" className={style.space} src={foto2}  />
                    </div>
                </div>
            </div>
          </div>
          <div className="col-1"></div>
          {/* <div className={style.box}> */}
          <div className="col-6">
            <h3 className={style.text}>Contact Us</h3>
            <Forms/>
         </div> 
         {/* </div> */}
        </div>
      </div>
    )
}

{/* <form action="review_message.html" className="g-3 needs-validation" novalidate >
                <div>
                  <label for="validationCustom01" className="form-label" className={style.text2} >Full Name <label className={style.text6}>*</label></label>
                    <div className={style.space2}>
                        <input type="text" className="form-control"  name="fullname" placeholder="your Full Name Here" id="fullname"  required/>
                    </div>
                  <div className="invalid-feedback">
                    <div className={style.space5}>
                        Full name cannot be empty
                    </div>      
                  </div>
                </div>

                <div>
                  <label for="validationCustom02" className="form-label" className={style.text4 , style.space3}>Email Address <label className="text6">*</label></label>
                  <input type="email" className="form-control space2" name="email" placeholder="example@domain.com"  id="email"  required/>
                  <div className="invalid-feedback space5">
                  Email Address cannot be empty
                  </div>
                </div>

                <div>
                  <label for="validationCustom03" className="form-label text5 space3">Phone number <label className="text6">*</label></label>
                  <input type="number" className="form-control space5" name="phone"  placeholder="08573890xxxxx" id="phone"  required/>
                  <div className="invalid-feedback space5">
                  Phone number cannot be empty
                  </div>
                </div>
                
                <div>
                  <h3 className="text2 space3">Nationalty</h3> */} 
                  {/* <Select name="nasionality"  place="malaysia" className="space2 form-select"  id="nasionality">
                    <option value="selected">Selected</option>
                    <option value="Indoensia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                  </Select>   */}
                {/* </div>

                <div>
                <h3 className="text2 space3">Message</h3>
                  <textarea className="form-control space2" name="message"  cols="22" rows="5" value="" placeholder="Your Full Name here" id="message"></textarea>
                </div>
                
                <button className="submit space-button text3" onclick="passing()" name="submit" type="submit" >Submit</button>
              </form> */}