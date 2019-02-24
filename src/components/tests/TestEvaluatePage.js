import React,{Component} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

class TestEvaluatePage extends Component{
        constructor(){
           super()
           this.state = {
               studentData : []
           }
        }
       
       
        componentDidMount() {
          /*
           fetch("URL")
               .then(response => response.json())
               .then(data => {
                   this.setState({
                       questions: data         
                   })
               })*/
           // answer types: text, multiple
           let   data = [
             {
                id : 1,
                name : "Abinash",
                score: 35,
                evaluation : 'Evaluated'
             },
             {
                id : 2,
                name : "Hrishikesh",
                score: 37,
                evaluation : 'Evaluated'
               
             },
             {
                id : 3,
                name : "Kaushik",
                score: 39,
                evaluation : 'Evaluated'
             
             }
           ]
           this.setState({
               studentData: data         
           })
       }
       
       render() {
           const studentData = this.state.studentData
           
           return (
               <div>
                 <Row>
                   <Col style = {{textAlign: "right"}}>
                    Filter
                   </Col>  
                   <Col xs lg = "auto">
                     <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                         Class
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Class 10</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Class 11</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">class 12</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                   </Col>
                   <Col xs lg = "3">
                   <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                         Year
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">2010</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2011</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">2012</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                   </Col>
                 </Row>
                 <Row>
                 <Table bordered hover lg = {4} style = {{marginTop:7,marginRight:7}}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Student Name</th>
                      <th>Score</th>
                      <th>Evaluation</th>
                      <th>Check</th>         
                    </tr>
                   </thead>
              
                   <tbody>
                     {studentData.map(s=>(
                       <tr>
                          <td>{s.id}</td>
                          <td>{s.name}</td>
                          <td>{s.score}</td>
                          <td>{s.evaluation}</td>
                          <td><Button variant="primary">Re-Evaluate</Button></td>
                       </tr>
                     ))}
                   </tbody>
                 </Table>
                 </Row>       
               </div>
           )
       }
       }
       


export default TestEvaluatePage