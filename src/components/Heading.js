import React,{Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Heading extends Component{
    render(){
        return(
            <Row style = {{marginTop:"10px"}}> 
            <Col>    
            <h4>DASHBOARD</h4>
            
            </Col>
            </Row>
        );
    }
}
export default Heading

//<h2>{ match.params.testid }</h2>