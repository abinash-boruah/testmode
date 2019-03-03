import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class TestsPage extends Component{
 constructor(){
    super()
    this.state = {
        TestData : []
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
    let data = [
      {
       id : 1,
       name : "Test 1",
       toggle : true
      },
      {
       id : 2,
       name : "Test 2",
       toggle : true
      },
      {
       id : 3,
       name : "Test 3",
       toggle :true
      }
    ]
    this.setState({
        TestData: data         
    })
}

render() {
    const testData = this.state.TestData
    
    return (
        <div style ={{ background:'white',
                       padding:'7px',
                       marginTop:'20px',
                       marginLeft:'150px',
                       marginRight:'150px',
                       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                       borderRadius:'10px',
                       fontFamily:'Quicksand'
                       }}>
          <Table hover lg = {4} >
           <thead style={{fontFamily:'Montserrat'}}>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Enable/Disable</th>
               <th>Modify</th>         
             </tr>
            </thead>
       
            <tbody>
              {testData.map(t=>(
                <tr>
                   <td>{t.id}</td>
                   <td><Link to="/test/asdasd" style={{color:'black'}}>{t.name}</Link></td>
                   <td>
                   </td>
                   <td><Button className='rd-button'>Edit</Button> <Button className='reverse-rd-button'>Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>      
        </div>
    )
}
}

export default TestsPage


/*const Tests = ({ match }) => (
    <Container>
      <h2>Tests</h2>
      <Table  bordered hover size="sm">
       <thead>
        <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Modify</th>
         <th>Toggle</th>
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

export default Tests*/