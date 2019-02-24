import React,{Component} from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TestViewPage extends Component{
 constructor(){
    super()
    this.state = {
        loading : false,
        Data :
          {
            id : 1,
           question : "What is your name?",
           marks : 5
          } 
          
    }
 }


 componentDidMount() {
    /*this.setState({loading: true})
    fetch("Question URL")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                testData: data         
            })
        })
     */   
}

render() {
    const Id       = this.state.loading ? "loading..." : this.state.Data.id
    const Question = this.state.loading ? "loading..." : this.state.Data.question
    const Marks   = this.state.loading ? "loading..." : this.state.Data.marks
    
    return (
        <div>
          <table bordered hover lg = {4}>
           <thead>
             <tr>
               <th>ID</th>
               <th>Questions</th>
               <th>Marks</th>         
             </tr>
            </thead>
       
            <tbody>
              <tr>
                 <td>{Id}</td>
                 <td>{Question}</td>
                 <td>{Marks}</td>
              </tr>
            </tbody>
          </table>      
        </div>
    )
}
}

export default TestViewPage