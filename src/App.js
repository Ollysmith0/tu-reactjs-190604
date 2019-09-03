import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import ProductItem from './components/ProductItem/ProductItem'
import './App.css';


function App(props) {
  return (
  <>
    <Header />
    <ProductList data={props.dssp} />
    <Footer />
  </>
  );
}



export default App;
