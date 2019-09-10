import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";
import ProductItem from "./components/ProductItem/ProductItem";



const dssp = [
  {
    productId: 1,
    shop: "NC",
    name: "A",
    price: 500001,
    pricePromoted: 40000
  },
  {
    productId: 2,
    shop: "NC",
    name: "B",
    price: 500007,
    pricePromoted: 40000
  },
  {
    productId: 3,
    shop: "NC",
    name: "C",
    price: 500005,
    pricePromoted: 40000
  },
  {
    productId: 4,
    shop: "NC",
    name: "D",
    price: 500009,
    pricePromoted: 40000
  },
  {
    productId: 5,
    shop: "NC",
    name: "E",
    price: 500012,
    pricePromoted: 40000
  }
];

function App() {
  const [prdInCart, setPrdInCart] = useState([])
  const [data, setData] = useState(dssp)
  const addToCart = (product) => {
    setPrdInCart([...prdInCart, product])
  }

  const removeProduct = (product) => {
    const products = prdInCart.filter(elm => elm.productId !== product.productId)
    setPrdInCart(products)
  }
  const handleSortNameAtoZ = () => {
    const products = [...data]
    const newProducts = products.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
    setData(newProducts)
  }
  const handleSortNameZtoA = () => {
    const products = [...data]
    const newProducts = products.sort((a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0));
    setData(newProducts)
  }
  const handleSortPriceHighToLow = () => {
    const products = [...data]
    const newProducts = products.sort((a, b) => a.price - b.price);
    setData(newProducts)
  }
  const handleSortPriceLowToHigh = () => {
    const products = [...data]
    const newProducts = products.sort((a, b) => b.price - a.price);
    setData(newProducts)
  }
  return (
    <>
      <Header prdInCart={prdInCart} removeProduct={removeProduct} />
      {/* <ProductList data={dssp} addToCart={addToCart}/> */}
      <ProductList 
        dssp={data} 
        handleSortNameAtoZ={handleSortNameAtoZ} 
        handleSortNameZtoA={handleSortNameZtoA} 
        handleSortPriceHighToLow={handleSortPriceHighToLow} 
        handleSortPriceLowToHigh={handleSortPriceLowToHigh}
         />
      <Footer />
    </>
  );
}

export default App
