import logo from './logo.svg';
import './App.css';
import React from 'react';

class StepIncrement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count_value: 0,
      Step_to_INCDEC: 0
      
    }
  }
  handlechange_step= (e) => {
    this.setState({Step_to_INCDEC: e.target.value})
  }
  handleDecrementcount_value=() => {
    if (this.state.count_value > 0)
    this.setState({count_value: parseInt(this.state.count_value) - parseInt(this.state.Step_to_INCDEC)}, () => {
      if(this.state.count_value< 0)
    this.setState({count_value: 0})
    })
  }
  
  handleIncrementcount_value=() => {
    this.setState({count_value: parseInt(this.state.count_value) + parseInt(this.state.Step_to_INCDEC)})
  }
  
  render() {
    return (
      <>
      <h1>Steps to INC/DEC:</h1>
       <input type="number" onChange={(e) => {this.handlechange_step(e)}}></input>
       <h1>Counter:</h1>
       <button style={{padding:"13px", marginLeft: "50px", marginRight: "20px"}} onClick={()=> this.handleDecrementcount_value()}> - </button>
       <span>{this.state.count_value}</span>
       <button style={{padding: "13px",  marginLeft: "20px"}} onClick={()=> this.handleIncrementcount_value()}> + </button>
  
      </>
    )
  }
  
  }

export default StepIncrement;
