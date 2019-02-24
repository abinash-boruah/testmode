import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import TestViewPage from './TestViewPage'
import TestEditPage from './TestEditPage'
import TestEvaluatePage from './TestEvaluatePage'

const tabs = ["view","edit","evaluate"]

const ListItem = ({func, text, pageType}) => (
  <ListGroup.Item 
    style={{ borderRadius: '0'}}
    as="li"
    action
    onClick={()=>func(pageType)}
    >{text}
    </ListGroup.Item>
)


class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: tabs[0]
    }
    this.handlePageType = this.handlePageType.bind(this);
  }

  handlePageType = (pageType) =>{
    this.setState({
      selectedTab: pageType
    }) 
  }

  testPageDisplay = () => {
    switch(this.state.selectedTab) {
      case tabs[0]:
        return <TestViewPage/>
      case tabs[1]:
        return <TestEditPage/>
      case tabs[2]:
        return <TestEvaluatePage/>
      default:
    } 
  }

  render() {
    const match = this.props.match
    return (
    <Container fluid={true} style={{marginTop:"13px"}}>
      <Row>
      <Col xs={3}>
       <ListGroup as="ul" style={{ marginTop: '1em' }} defaultActiveKey = "/" > 
        <ListItem func={this.handlePageType} pageType={tabs[0]} text="View"></ListItem>  
        <ListItem func={this.handlePageType} pageType={tabs[1]} text="Edit"></ListItem>  
        <ListItem func={this.handlePageType} pageType={tabs[2]} text="Evaluate"></ListItem>
       </ListGroup>
      </Col>
      <Col>
         {this.testPageDisplay()}
         {/*<View/>*/}
      </Col>
    </Row>
    
    </Container>
    )
  }
}
//<h3>{ match.params.testid }</h3>
export default Test