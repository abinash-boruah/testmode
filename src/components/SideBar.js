import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import SideBarLink from "./SideBarLink"

const SideBar = () => (
  <div style={{ paddingLeft: '1em'}}>
    <Navbar>
    <Nav className="mr-auto">
      <Link style={{ padding: '.5rem 1rem' }} to="/">TestMode</Link>
    </Nav>
    </Navbar>
    <div>
    <Nav className = "flex-column">
      <SideBarLink icon="heart" text="Blog post"/>
      <SideBarLink icon="search" text="Blog post"/>
      <SideBarLink icon="heart" text="Blog post"/>
      <SideBarLink icon="heart" text="Blog post"/>
    </Nav>
    </div>

  </div>
)

export default SideBar