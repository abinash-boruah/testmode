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
             },
             {
                id : 2,
                name : "Hrishikesh", 
             },
             {
                id : 3,
                name : "Kaushik",
                score: 39
             }
           ]
           this.setState({
               studentData: data         
           })
       }
       
       render() {
           const studentData = this.state.studentData
           
           return (
            <div >
            <Row>
              <Col style = {{textAlign: "right"}}>
                 <h3>Filter</h3>
              </Col>  
              <Col xs lg = "auto">
                 <Dropdown>
                     <Dropdown.Toggle id="dropdown-basic" className='rd-button'>
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
                     <Dropdown.Toggle id="dropdown-basic" className ='rd-button'>
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
              <div style={{background:'white',
                borderRadius:'10px',
                padding:'10px',
                width:'100%',
                margin:'10px',
                boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                 <Table hover lg = {4} >
                  <thead>
                     <tr>
                         <th>ID</th>
                         <th>Student Name</th>
                         <th>Score</th>
                         <th>Check</th>         
                     </tr>
                   </thead>
                   <tbody>
                     {studentData.map(s=>(
                       <tr>
                          <td>{s.id}</td>
                          <td>{s.name}</td>
                          <td>{s.score?s.score:"not evaluated"}</td>
                          <td><Button className='rd-button'>Re-Evaluate</Button></td>
                       </tr>
                     ))}
                   </tbody>
                 </Table>
                 </div>
            </Row>       
           </div>
           )
       }
       }
       


export default TestEvaluatePage