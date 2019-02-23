import React,{Component} from 'react'

import Card from 'react-bootstrap/Card';

const View = ({header, value}) => (
    <Card bg="light" text="dark" style={{ marginTop: '1em' }} >
        <Card.Header>{ header }</Card.Header>
        <Card.Body>
          <Card.Title>{ value }</Card.Title>
        </Card.Body>   
    </Card>
)
export default View