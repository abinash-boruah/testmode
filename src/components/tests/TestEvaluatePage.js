import React,{Component} from 'react'
import table2 from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

const TestEvaluatePage = props => (
    <div>
        <table2 bordered hover size="lg">
       <thead>
        <tr>
         <th>ID</th>
         <th>Questions</th>
         <th>Answer</th>
         <th>Evaluate</th>         
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>1</td>
         <td>Test 1</td>
         <td>Ongoing</td>
         <td>
             <Form>
             <Form.Control as="textarea" rows="1" />
             </Form>
         </td>
        </tr>
        <tr>
         <td>2</td>
         <td>Test 2</td>
         <td>Completed</td>
         <td> <Form>
             <Form.Control as="textarea" rows="1" />
             </Form></td>
        </tr>
        <tr>
         <td>3</td>
         <td>Test 3</td>
         <td>Upcoming</td>
         <td> <Form>
             <Form.Control as="textarea" rows="1" />
             </Form></td> 
        </tr>
      </tbody>
    </table2>

    </div>
)
export default TestEvaluatePage