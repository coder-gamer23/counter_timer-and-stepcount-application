import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter_timer';
import StepIncrement from './stepicrement'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* To run timer_counter please uncomment below one and comment the StepIncrement */}
    {/* <Counter /> */ } 
    <StepIncrement />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
