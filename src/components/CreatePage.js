import React from 'react';
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import shortid from 'shortid'
import Dropdown from 'react-bootstrap/Dropdown'

const CreatePage = () => (
    <Container>
      <h2>Create Test</h2>
      <Row>
        <Col xs={3}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label size="sm">Test Name</Form.Label>
              <Form.Control size="sm" placeholder=" Eg. Class-8-Chapter3-ClassTest" />
              <Form.Label size="sm" style={{marginTop:"5px"}}>Creation Time</Form.Label>
              <Form.Control size="sm" disabled value={Date.now()} />
              <Form.Label size="sm" style={{marginTop:"5px"}}>TestID</Form.Label>
              <Form.Control size="sm" value={shortid.generate()} />
           </Form.Group>
        </Form>
        </Col>
        <Col> 
          <Form>
          <Form.Label size ="sm">Question</Form.Label>
          <Form.Control as="textarea" size="lg" placeholder=" " />      
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" style ={{marginTop:"6px"}}>
              Answer Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Text</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Multiple Choice</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" style={{marginTop:"6px"}}>Add Question</Button><Button variant="success" style={{marginTop:"7px",marginLeft:'70%'}}>Save Test</Button>
        </Col>     
      </Row>
    </Container>
);
export default CreatePage