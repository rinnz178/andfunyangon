import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from 'react-bootstrap/Image';
import Logo from '../assets/images/logo.png'
import '../assets/styles/nav.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 bg-body-dark" data-bs-theme="dark" style={{backgroundColor: 'rgba(12, 2, 57, 0.2)',backdropFilter: 'blur(5px)' }}>
          <Container className="py-1 col-md-10 col-sm-11" style={{ maxWidth: '100%' }}>
            <Navbar.Brand href="#">
              <Image src={Logo} rounded style={{maxWidth:"130px"}}/>
            </Navbar.Brand>
            <Navbar.Toggle
              // aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              ----
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src="../assets/images/logo.svg" rounded />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link href="#action1" className="px-3" style={{color:'white'}}>
                    <Link to="/">
                      Home
                    </Link>
                  </Nav.Link >
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    <Link to="/services">
                      Services
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    Activities
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    Products
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    Jobs
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    About
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3" style={{color:'white'}}>
                    Feedback
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavMenu;
