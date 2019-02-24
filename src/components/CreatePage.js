import React from 'react';
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import shortid from 'shortid'

const CreatePage = () => (
    <Container>
      <h2>Create Test</h2>
      <Row>
        <Col xs={3}>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label size="sm">Test Name</Form.Label>
    <Form.Control size="sm" placeholder=" Eg. Class-8-Chapter3-ClassTest" />
    <Form.Label size="sm">Creation Time</Form.Label>
    <Form.Control size="sm" disabled value={Date.now()} />
    <Form.Label size="sm">TestID</Form.Label>
    <Form.Control size="sm" value={shortid.generate()} />
  </Form.Group>
</Form>
        </Col>
        <Col>
        </Col>
      </Row>



      
    </Container>
);
export default CreatePage