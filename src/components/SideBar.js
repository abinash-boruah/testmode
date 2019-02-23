import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


const SideBar = () => (
<Navbar bg ="dark" variant ="light" expand ="lg" >
 
 <Nav fill variant="tabs" defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav>
 
</Navbar>
);
export default SideBar