import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

const dssp = [
  {
    productId: 1,
    shop: "NC",
    name: "Tui xach hang hieu",
    price: 50000,
    pricePromoted: 40000
  },
  {
    productId: 2,
    shop: "NC",
    name: "Tui xach hang hieu",
    price: 50000,
    pricePromoted: 40000
  },
  {
    productId: 3,
    shop: "NC",
    name: "Tui xach hang hieu",
    price: 50000,
    pricePromoted: 40000
  },
  {
    productId: 4,
    shop: "NC",
    name: "Tui xach hang hieu",
    price: 50000,
    pricePromoted: 40000
  },
  {
    productId: 5,
    shop: "NC",
    name: "Tui xach hang hieu",
    price: 50000,
    pricePromoted: 40000
  }
];

function App() {
  const [prdInCart, setPrdInCart] = useState([])
  const addToCart = (product) => {
    setPrdInCart([...prdInCart, product])
  }

  const removeProduct = (product) => {
    const products = prdInCart.filter(elm => elm.productId !== product.productId)
    setPrdInCart(products)
  }
  return (
    <>
      <Header prdInCart={prdInCart} removeProduct={removeProduct}/>
      {/* <ProductList data={dssp} addToCart={addToCart}/> */}
      <Register />
      <Footer />
    </>
  );
}


export default App;