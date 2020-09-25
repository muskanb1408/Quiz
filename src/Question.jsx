import React, { Component } from 'react';
import './App.css';

class Question extends Component{
  constructor(props){
    super(props)
    this.state = {
      count:1,
      num1:1,
      num2:1,
      score:0,
      response:"",
     

    };
  }
render(){
  return(
    <div>
      
    <div className="main">
     
      <h1 className="heading">Test Your Brain</h1>
      <h2 className="subheading">Instructions:</h2>
      <ul><li>The following quiz contains Simple addition problems.</li>
      <li>Each Question carries 1 marks.</li>
      <li>There is no negative marking.</li>
      </ul>
      <h1 className="numbering">Question number: {this.state.count}</h1>
      <h2 className="hey">{this.state.num1}  + {this.state.num2}</h2>
      
        <input  onChange={this.updateResponse} onKeyPress={this.inputKeyPress} value={this.state.response}></input>
        <div className="result" >score: {this.state.score} </div>
     
     
    </div>
    <div className="bottom"></div>
    </div>
  );
}


updateResponse = (event) => {
  this.setState({
    response:event.target.value,
  });

}


inputKeyPress = (event) => {
  
  
  if (event.key==="Enter")
  {
    const answer = parseInt(this.state.response);
    if (answer === this.state.num1  +this.state.num2){
      this.setState(State=> ({
        score: State.score +1,
        
        count:State.count +1,
        num1:Math.ceil(Math.random()*10),
        num2:Math.ceil(Math.random()*10),
        response:"",
      }));
    }
      else{
      this.setState(State=>({
        response:"",
      }));
    }
  }
    
   
  
  }

}


export default Question;