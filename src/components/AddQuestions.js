import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

class AddQuestions extends Component {
render(){
 return(
    <div style ={{borderRadius:'7px',
    margin :"20px", 
    background:"white", 
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
        <Row>
        <Col>    
        <Form style = {{padding:'20px'}}>
          <Form.Label style ={{fontFamily:'Montserrat'}}><h2>Question</h2></Form.Label>
          <Form.Control as="textarea" size="lg" placeholder=" "/>      
          </Form>
          </Col>
        <Col md = "auto"> 
        <Dropdown>
             <Dropdown.Toggle id="dropdown-basic" style ={{marginTop:"15px",marginLeft:"10px"}} className = "rd-button">
               Answer Type
             </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Text</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Multiple Choice</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form style={{margin:"10px"}}>
          <Form.Group controlId="###">
          <Form.Label>Enter Marks</Form.Label>
          <Form.Control type="email" placeholder="" />
          </Form.Group>
           </Form>
           <Button className='reverse-rd-button' style ={{marginBottom:"15px",marginLeft:"10px"}}>Delete</Button>
        </Col>  
        </Row> 
    </div>                
 );

}
}

export default AddQuestions

