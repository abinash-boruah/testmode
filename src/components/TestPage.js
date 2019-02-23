import React from 'react';
import Card from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Test = ({ match }) => (
    <Container fluid={true}>
      <h3>TestMode Overview</h3>
      <Row>
         <Col> <Card header="Total tests" value="34"/> </Col>
         <Col> <Card header="Average Student Score" value="34"/> </Col>
         <Col> <Card header="How to use TestMode" value="jkj"/> </Col>
      </Row>
    <h2>{ match.params.testid }</h2>
    </Container>
);

export default Test