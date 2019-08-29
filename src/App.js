import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      {props.dssp.map(sp =>{
        return (
          <div className="product">
            <img className="product-img" src={sp.imgURL} />
            <p>{sp.title}</p>
            <p>{sp.description}</p>
            <p>{sp.price}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
