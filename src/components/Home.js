import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Heading from './Heading'
import CardDeck from 'react-bootstrap/CardDeck'



const Home = () => (

     <div style ={{margin:"50px"}}>
      <Heading/>
      <h3>Test Mode</h3>
      <CardDeck>
         <Card>
         <Card.Body>
            <Card.Title>Total Tests</Card.Title>
            <Card.Text>
             34
            </Card.Text>  
         </Card.Body>
            <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         <Card>  
      <Card.Body>
      <Card.Title>Average Score</Card.Title>
      <Card.Text>
        45
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>How to use Test Test Mode</Card.Title>
      <Card.Text>
       34
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>
    </CardDeck>
    </div>
);
export default Home

// <h3>TestMode Overview</h3>
/*<Col> <Card header="Total tests" value="34"/> </Col>
<Col> <Card header="Average Student Score" value="34"/> </Col>
<Col> <Card header="How to use TestMode" value="jkj"/> </Col>
*/