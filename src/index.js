import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const dssp = [{
    Name: 'bàn',
    Price: 2000,
    PricePromoted: 1000,
    Description: 'abc'
  },{
    Name: 'bàn',
    Price: 2000,
    PricePromoted: 1000,
    Description: 'abc'
  },{
    Name: 'bàn',
    Price: 2000,
    PricePromoted: 1000,
    Description: 'abc'
  }]
ReactDOM.render(<App dssp={dssp}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
