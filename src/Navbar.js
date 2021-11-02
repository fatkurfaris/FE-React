import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-primary bg-body rounded posisi">
        <div className="container-fluid">
          <a className="navbar-brand space3" href="#"><img src="img/logo-ALTA.png" alt="" width="60%"/></a>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <li className="nav-item navbar-nav d-flex ">
                <a className="space2 text " href="HOME.HTML">HOME</a>
                <a className="space2 text " href="ABOUT.HTML">ABOUT</a>
                <a className="space2 text " href="EXPERIENCE.HTML">EXPERIENCE </a>
                <a className="space text " href="contact_us.html">CONTACT</a>
            </li>
          </div>
        </div>
    </nav>
        </div>
    )
}
