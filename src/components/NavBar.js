import React from 'react';
import { Link } from "react-router-dom";

// import react components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
  <Navbar style={{background: 'linear-gradient(120deg, #5983e8, #00e4d0)' }} bg="light" variant ="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={{ padding: '.5rem 1rem', color: 'white' }} to="/create">Create</Link>
          <Link style={{ padding: '.5rem 1rem', color: 'white' }} to="/tests">Tests</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar