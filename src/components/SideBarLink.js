import React from 'react';
import Nav from 'react-bootstrap/Nav';


const SideBarLink = ({header, value}) => (

   <div>
    <Nav className = "flex-column">
     <Nav.Link href="/home">Active</Nav.Link>
     <Nav.Link eventKey="link-1">Link</Nav.Link>
     <Nav.Link eventKey="link-2">Link</Nav.Link>
  
     </Nav>
   </div>
  

     
);
export default SideBarLink
        /*<Card.Body>
          <Card.Title>{ value }</Card.Title>
        </Card.Body>*/