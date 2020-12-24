import React from "react";
import firebaseApp from "../../firebase";
import { useHistory, Link } from "react-router-dom";

const Header = (props) => {
  const { prdInCart, removeProduct } = props;
  const history = useHistory();
  const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }
    return total;
  };
  let res = sum(prdInCart);
  const handleSignout = async () => {
    try {
      await firebaseApp.auth().signOut();
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <div id="header-sticky" className="header-area box-90 sticky-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div className="logo">
                <a href="/#">
                  <img src="./assets/logo_shop.png" alt="" />
                </a>
              </div>
              <div className="category-menu">
                <h4>Category</h4>
                <ul>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Table lamp
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Furniture
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Chair
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Men
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Women
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Cloth
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-shopping-cart" /> Trend
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div className="main-menu text-center">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <a href="/#">Home</a>
                    </li>
                    <li>
                      <a href="/#">Pages</a>
                      <ul className="submenu">
                        <li>
                          <a href="./detail">Product Detail</a>
                        </li>
                        <li>
                          <Link to="/login">login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <a href="./cart.html"></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="search-btn">
                    <a
                      className="search-btn nav-search search-trigger"
                      href="/#"
                    >
                      <i className="fas fa-search" />
                    </a>
                  </li>
                  <li className="logout-btn" onClick={handleSignout}>
                    <a href="/login">
                      <i className="fas fa-sign-out-alt"></i>
                    </a>
                  </li>
                  <li className="d-shop-cart">
                    <a href="/#">
                      <i className="fas fa-shopping-cart" />
                      <span className="cart-count">
                        {prdInCart && prdInCart.length}
                      </span>
                    </a>
                    <ul className="minicart">
                      {prdInCart &&
                        prdInCart.map((elm, i) => {
                          return (
                            <li key={i}>
                              <div className="cart-img">
                                <a href="/#">
                                  <img src={elm.img_url} alt="elm" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <h3>
                                  <a href="/#">{elm.name}</a>
                                </h3>
                                <div className="cart-price">
                                  <span className="new">
                                    {elm.price
                                      .toString()
                                      .replace(
                                        /(\d)(?=(\d{3})+(?!\d))/g,
                                        "$1."
                                      )}
                                  </span>
                                  <span> </span>
                                  <span>
                                    <del>{elm.original_price}</del>
                                  </span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a
                                  href="/#"
                                  onClick={() => {
                                    removeProduct(elm);
                                  }}
                                >
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </li>
                          );
                        })}
                      <li>
                        <div className="total-price">
                          <span className="f-left">Total:</span>
                          <span className="f-right">
                            {prdInCart.length &&
                              res
                                .toString()
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                            đ
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="checkout-link">
                          <a href="/#">Shopping Cart</a>
                          <a className="red-color" href="/#">
                            Checkout
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <div className="mobile-menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
