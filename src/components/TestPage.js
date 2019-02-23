import React from 'react';
import Container from 'react-bootstrap/Container'

const Test = ({ match }) => (
    <Container>
        as
        Test ID:
      <h2>{ match.params.testid }</h2>
    </Container>
);

export default Test