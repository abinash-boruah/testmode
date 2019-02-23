import React,{Component} from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TestViewPage = props => (
    <div>
    <Container>
      <table bordered hover size="lg">
       <thead>
        <tr>
         <th>ID</th>
         <th>Questions</th>
         <th>Marks</th>         
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>1</td>
         <td>Test 1</td>
         <td>3</td>
        </tr>
        <tr>
         <td>2</td>
         <td>Test 2</td>
         <td>5</td>
        </tr>
        <tr>
         <td>3</td>
         <td>Test 3</td>
         <td>6</td>
        </tr>
      </tbody>
    </table>
    </Container>
    </div>
)
export default TestViewPage