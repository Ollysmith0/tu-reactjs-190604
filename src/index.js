import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
