import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'


const Tests = ({ match }) => (
    <Container>
      <h2>Tests</h2>
      <li><Link to="/test/asdasd">Test 1</Link></li> 
      <li><Link to="/test/ppp">Test asd1</Link></li> 
      <li><Link to="/test/asldkljasld">Test asdasd1</Link></li> 
    </Container>
);

export default Tests