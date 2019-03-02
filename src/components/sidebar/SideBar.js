import React,{Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import SideBarLink from "./SideBarLink"
import ListGroup from 'react-bootstrap/ListGroup'
import CreatePage from '../CreatePage';


const sideBarStyle = {
  paddingLeft :'0em',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  height: '100vh',
  background:'#16082f'
}

const circle = {
marginLeft:'60px',
height: '100px',
width: '100px',
background:'#F1F2EB',
borderRadius:'50%'
}

class SideBar extends Component {

  
 render(){
   return(
  <div style={sideBarStyle}>
   <Navbar>
       <Nav className="mr-auto">
          <Link style={{ padding: '.5rem 1rem', 
          color: '#FF4C5D', 
          fontFamily:'Montserrat', 
          align:'right'
          }} to="/"><h6>TEST MODE</h6></Link>
 
       </Nav>
    </Navbar>
    <div style={circle}>
    </div>
    <h6 align="center" style={{color: 'white'}}>username</h6>
      <p align="center" style={{color: 'white'}}>@username</p>

    <div>
     {/* <Nav className = "flex-column">
       <ListGroup defaultActiveKey="/">
       <ListGroup.Item action href="#link1">Rules Dashboard</ListGroup.Item>
       <ListGroup.Item action href="#link2">Insights</ListGroup.Item>
       <ListGroup.Item action href = "#link3">Blog Post</ListGroup.Item>
       </ListGroup>
     </Nav> */}
    </div>

  </div>
   );
 }
}

export default SideBar



/*<Nav className = "flex-column">
      <SideBarLink icon="heart" text="Blog post"/>
      <SideBarLink icon="search" text="Blog post"/>
      <SideBarLink icon="heart" text="Blog post"/>
      <SideBarLink icon="heart" text="Blog post"/>
    </Nav>
*/