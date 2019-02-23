import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// import bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import custom components
import Tests from './components/TestsPage';
import Test from './components/TestPage';
import Home from './components/Home';
import CreatePage from './components/CreatePage';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
        <Router>
          <Row style={{margin: '0'}}>
            <Col xs={2}>
              <SideBar/>
            </Col>
            <Col xs={10}>
              <NavBar/> 
              <Route exact path="/" component={Home} />
              <Route path="/tests" component={Tests} />
              <Route path="/tests/:testid" component={Test} />
              <Route path="/create" component={CreatePage} />
            </Col>
          </Row>
        </Router>
    );
  }
}

export default App;