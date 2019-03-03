import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddQuestions from './AddQuestions'
import Question from './common/Question'


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
         <Question/>
        </Col>
        <Col> 
              <AddQuestions/>
              {this.state.inputList}
        </Col>        
        </Row>
        <Row>
        </Row>
    </Container>

    )


   }
  }
   export default FormQuestion