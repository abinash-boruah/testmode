import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
<Navbar bg="light" variant ="light" expand="lg" sticky="top">
<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link></Nav.Link>
      <Nav.Link>></Nav.Link>
    </Nav>
          
  </Navbar.Collapse>
</Navbar>
);
export default NavBar

