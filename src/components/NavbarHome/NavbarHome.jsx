import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Image} from 'react-bootstrap'
import style from './NavbarHome.module.css'
import Gambar1 from '../../img/Capture.PNG'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarHome(){
    return (
        <>
  <Navbar collapseOnSelect expand="lg" className={style.colorNav} variant="dark" fixed="top">
  <Container>
  
  <Image src={Gambar1} width="19%"/>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"></Nav>
    <Nav>
      <Nav.Link href="/" className={style.text}>Home</Nav.Link>
      <Nav.Link href="Movie">Movie</Nav.Link>
      <Nav.Link href="Login">Login</Nav.Link>
      <Nav.Link href="Upcoming">Upcoming</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      {/* <Nav.Link href="Screen">Screen</Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}