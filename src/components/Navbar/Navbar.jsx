import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import style from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbars(){
    return (
        <>
  <Navbar collapseOnSelect expand="lg" className={style.colorNav} variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

  <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"></Nav>
    <Nav>
      <Nav.Link href="#deets" className={style.text}>Home</Nav.Link>
      <Nav.Link href="#deets">Movie</Nav.Link>
      <Nav.Link href="#deets">Upcoming</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}