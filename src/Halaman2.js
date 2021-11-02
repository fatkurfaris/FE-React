import React from 'react'

export default function Halaman2() {
    return (
        <div>
        <div className="">
        <div className="row ">
          <div className="col-md-4 logo  ">
            <img src="img/image.jpg" alt="" width="600px" height="850px"/>
            <div className="logo position-absolute top-0 start-0">
              <img className="position-absolute space" src="img/logo-ALTA-v2.png"  />
            </div>
          </div>

          <div className="col-md-6 "> 
              <h3 className="text">Contact Us</h3>

              <form action="review_message.html" className="g-3 needs-validation" novalidate >
                <div>
                  <label for="validationCustom01" className="form-label text2">Full Name <label className="text6">*</label></label>
                  <input type="text" className="form-control space2" name="fullname" placeholder="your Full Name Here" id="fullname"  required/>
                  <div className="invalid-feedback space5">
                  Full name cannot be empty
                  </div>
                </div>

                <div>
                  <label for="validationCustom02" className="form-label text4 space3">Email Address <label className="text6">*</label></label>
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
                  <h3 className="text2 space3">Nationalty</h3>
                  <select name="nasionality"  place="malaysia" className="space2 form-select"  id="nasionality">
                    <option value="selected">Selected</option>
                    <option value="Indoensia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>  
                </div>

                <div>
                <h3 className="text2 space3">Message</h3>
                  <textarea className="form-control space2" name="message"  cols="22" rows="5" value="" placeholder="Your Full Name here" id="message"></textarea>
                </div>
                
                <button className="submit space-button text3" onclick="passing()" name="submit" type="submit" >Submit</button>
              </form>
          </div>
        </div>
      </div>
        </div>
    )
}
