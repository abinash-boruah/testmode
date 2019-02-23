import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tests from './components/Tests';
import Test from './components/Test';
import Home from './components/Home';
import NavBar from './components/NavBar'
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Row>
          <Col lg={2}>
          <SideBar/>
          </Col>
          <Col lg={10}>
          <NavBar/> 
          <Link to="/">Home</Link>
          <Link to="/tests">Tests</Link>

          <Route exact path="/" component={Home} />
          <Route path="/tests" component={Tests} />
          <Route path="/tests/:testid" component={Test} />
          </Col>
          </Row>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
