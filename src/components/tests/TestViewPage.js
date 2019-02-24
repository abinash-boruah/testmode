import React,{Component} from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TestViewPage extends Component{
 constructor(){
    super()
    this.state = {
        questions : []
    }
 }


 componentDidMount() {
   /*
    fetch("URL")
        .then(response => response.json())
        .then(data => {
            this.setState({
                questions: data         
            })
        })*/
    // answer types: text, multiple
    let data = [
      {
       id : 1,
       question : "What is your name?",
       answer: { type: 'text' },
       marks : 5
      },
      {
       id : 2,
       question : "What is your food?",
       answer: { type: 'text' },
       marks : 3
      },
      {
       id : 3,
       question : "What is your pame?",
       answer: { type: 'text' },
       marks : 2
      }
    ]
    this.setState({
        questions: data         
    })
}

render() {
    const questions = this.state.questions
    
    return (
        <div>
          <Table bordered hover lg = {4}>
           <thead>
             <tr>
               <th>ID</th>
               <th>Questions</th>
               <th>Marks</th>
               <th>Answer Type</th>         
             </tr>
            </thead>
       
            <tbody>
              {questions.map(q=>(
                <tr>
                   <td>{q.id}</td>
                   <td>{q.question}</td>
                   <td>{q.marks}</td>
                   <td>{q.answer.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>      
        </div>
    )
}
}

export default TestViewPage