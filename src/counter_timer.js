import logo from './logo.svg';
import './App.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    countvalue: 0,
    istimerRunning: false
  }
}
handlechangecount= (e) => {
  this.setState({countvalue: e.target.value})
}

start_timer = () => {
  this.setState({istimerRunning: true})
 const interval = setInterval(() => {  
    this.setState({countvalue: (this.state.countvalue)-1})
    if (this.state.countvalue <= 1) {
      clearInterval(interval)
      this.setState({istimerRunning:false})
    }
    
  }, 1000);
  
}

render() {
  return (
    <>
    <h1>Timer Value:</h1>
    <input type="number" onChange={(e)=> {this.handlechangecount(e)}}></input>
    {this.state.istimerRunning === false ? <><button onClick={() => { this.start_timer(); } }>Start</button><br /><br /></> : <button disabled>Start</button>}
    <h2>Countdown: {this.state.countvalue}</h2>

    </>
  )
}

}

export default Counter;
