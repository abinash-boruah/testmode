import React from 'react';

const Test = ({ match }) => (
    <div>
        Test ID:
      <h2>{ match.params.testid }</h2>
    </div>
);

export default Test