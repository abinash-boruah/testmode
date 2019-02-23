import React from 'react';
//import Card2 from './TestPageCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import View from './view'

const ListItem = ({ text}) => (
  <ListGroup.Item  style={{ borderRadius: '0'}} as="li" action>{text}</ListGroup.Item>
)

const Test = ({ match }) => (
    <Container fluid={true}>
     <h3>{ match.params.testid }</h3>
    <Row>
      <Col xs={3}>
       <ListGroup as="ul" style={{ marginTop: '1em' }} defaultActiveKey = "/" > 
        <ListItem  text="View"></ListItem>  
        <ListItem  text="Edit"></ListItem>  
        <ListItem  text="Evaluate"></ListItem>
       </ListGroup>
      </Col>
      <Col>
         <View/>    
      </Col>
    </Row>
    
    </Container>
)

export default Test
