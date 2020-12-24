import React, { useState } from "react";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList/ProductList.container";
import Login from "./components/Login/Login.container";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetail from "./components/ProductDetail/ProductDetail.container";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [prdInCart, setPrdInCart] = useState([]);

  const onAddToCart = (product) => {
    setPrdInCart([...prdInCart, product]);
  };

  const removeProduct = (product) => {
    console.log(product, "product");
    const products = prdInCart.filter(
      (elm) => elm.product_id !== product.product_id
    );
    setPrdInCart(products);
    console.log(products, "products");
    console.log(prdInCart, "prdInCart");
  };

  return (
    <Router>
      <Header
        onAddToCart={onAddToCart}
        prdInCart={prdInCart}
        removeProduct={removeProduct}
      />
      <Switch>
        <Route path="/(login|dangnhap)/" component={Login} />
        <Route path="/(register|dangky)/" component={Register} />
        <Route
          exact
          path="/"
          render={() => (
            <ProductList
              onAddToCart={onAddToCart}
              removeProduct={removeProduct}
            />
          )}
        />
        <PrivateRoute
          path="/(ProductDetail|chitietsanpham)/:id"
          component={ProductDetail}
        />

        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
