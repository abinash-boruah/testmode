import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const SideBar = () => (
  <div style={{ paddingLeft: '1em'}}>
    <Navbar>
    <Nav className="mr-auto">
      <Link style={{ padding: '.5rem 1rem' }} to="/">TestMode</Link>
    </Nav>
    </Navbar>
    <div>
      <ul>
        <li>some link</li>
        <li>some link</li>
        <li>some link</li>
        <li>some link</li>
        <li>some link</li>
        <li>some link</li>
        <li>some link</li>
      </ul>
    </div>
  </div>
);

export default SideBar