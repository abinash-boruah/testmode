import React from 'react';
import { Link } from "react-router-dom";

// import react components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
  <Navbar bg="light" variant ="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={{ padding: '.5rem 1rem' }} to="/create">Create</Link>
          <Link style={{ padding: '.5rem 1rem' }} to="/tests">Tests</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar