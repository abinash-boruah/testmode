import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const Tests = ({ match }) => (
    <Container>
      <h2>Tests</h2>
      <Table  bordered hover size="sm">
       <thead>
        <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Status</th>
         <th>Modify</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>1</td>
         <td><Link to="/test/asdasd">Test 1</Link></td>
         <td>Ongoing</td>
         <td><Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button></td>
        </tr>
        <tr>
         <td>2</td>
         <td><Link to="/test/ppp">Test 2</Link></td>
         <td>Completed</td>
         <td><Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button></td> 
        </tr>
        <tr>
         <td>3</td>
         <td><Link to="/test/asldkljasld">Test 3</Link></td>
         <td>Upcoming</td>
         <td><Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button></td> 
        </tr>
      </tbody>
      </Table>
    </Container>
);

export default Tests