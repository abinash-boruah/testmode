import React from 'react';
import { Link } from "react-router-dom";


const Tests = ({ match }) => (
    <div>
      <h2>Tests</h2>
         <li> <Link to="/tests/asdasd">Test 1</Link></li> 
         <li><Link to="/tests/ppp">Test asd1</Link></li> 
         <li><Link to="/tests/asldkljasld">Test asdasd1</Link></li> 
    </div>
);

/*
const Tests = props => (
    <div>
      <h2>Tests</h2>

      {JSON.stringify(props.match)}
    </div>
);*/
export default Tests