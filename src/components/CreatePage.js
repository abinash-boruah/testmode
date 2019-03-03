import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import shortid from 'shortid'
import Dropdown from 'react-bootstrap/Dropdown'
import AddQuestions from './AddQuestions'



class AddQuestion extends Component {
  render(){
    return(
     <AddQuestions/>
    );
    } 
  }  

class FormQuestion extends Component {
     constructor(props) {
     super (props);  
     this.state = { inputList: [ ]};
     this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }
    onAddBtnClick(event) {
      const inputList = this.state.inputList;
      this.setState({
        inputList: inputList.concat( <AddQuestion key ={ inputList.length }/>)
      });
    }
   
    render(){
    return(
     <Container>
       <Row>
        <Col xs={4}>
        <div style = {{ fontFamily:'Quicksand',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        padding:'10px', 
                        background:'white',
                        marginTop:'20px',
                        marginLeft:'20px',
                        borderRadius:'10px'}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label size="sm">Test Name</Form.Label>
              <Form.Control size="sm" placeholder=" Eg. Class-8-Chapter3-ClassTest" />
              <Form.Label size="sm" style={{marginTop:"5px"}}>Creation Time</Form.Label>
              <Form.Control size="sm" disabled value={Date.now()} />
              <Form.Label size="sm" style={{marginTop:"5px"}}>TestID</Form.Label>
              <Form.Control size="sm" value={shortid.generate()} /> 
              <Button variant="primary" className="rd-button" style={{ width:"75%", 
              marginLeft:"35px",
              marginTop:"20px"}}
              onclick = {this.onAddBtnClick}>Add Question</Button>
              <Button variant="success" style={{marginTop:"20px",width:"75%", marginLeft:"35px"}} className ="reverse-rd-button">Save Test</Button>   
           </Form.Group>
        </Form>
        </div>
        </Col>
        <Col> 
              <AddQuestions/>
        </Col>        
        </Row>
        <Row>
        </Row>
    </Container>

    )


   }
  }
   export default FormQuestion