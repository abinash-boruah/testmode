import React from 'react';
import { Link } from "react-router-dom";

// import react components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const navbarStyle = {
  background: '#FF4C5D',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
}

const NavBar = () => (
  <Navbar className='rd-navbar' style={navbarStyle} variant ="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" className ='rd-navbar'>
          <Link to="/create" className="active">Create</Link>
          <Link to="/tests">Tests</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar