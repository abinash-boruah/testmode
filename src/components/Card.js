import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = ({header, value}) => (
    <Card bg="primary" text="white" style={{ width: '18rem', marginTop: '1em' }}>
        <Card.Header>{ header }</Card.Header>
        <Card.Body>
          <Card.Title>{ value }</Card.Title>
        </Card.Body>
    </Card>
)
export default CardComponent