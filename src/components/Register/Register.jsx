import React from 'react'
const Register = (props) => {
            return (
                <div>
                    <header>
                        <div id="header-sticky" className="header-area box-90 sticky-header">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                                        <div className="logo">
                                            <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
                                        </div>
                                        <div className="category-menu">
                                            <h4>Category</h4>
                                            <ul>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Table lamp</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Furniture</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Chair</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Men</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Women</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Cloth</a></li>
                                                <li><a href="#"><i className="fas fa-shopping-cart" /> Trend</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                                        <div className="main-menu text-center">
                                            <nav id="mobile-menu" style={{ display: 'block' }}>
                                                <ul>
                                                    <li>
                                                        <a href="./index.html">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pages</a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="./detail.html">Product Detail</a>
                                                            </li>
                                                            <li>
                                                                <a href="./login.html">login</a>
                                                            </li>
                                                            <li>
                                                                <a href="./register.html">Register</a>
                                                            </li>
                                                            <li>
                                                                <a href="./cart.html">Shoping Cart</a>
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
                                                    <a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search" /></a>
                                                </li>
                                                <li className="login-btn"><a href="#"><i className="far fa-user" /></a></li>
                                                <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart" /> <span className="cart-count">3</span></a>
                                                    <ul className="minicart">
                                                        <li>
                                                            <div className="cart-img">
                                                                <a href="#">
                                                                    <img src="./assets/pro1.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content">
                                                                <h3>
                                                                    <a href="#">Black &amp; White Shoes</a>
                                                                </h3>
                                                                <div className="cart-price">
                                                                    <span className="new">$ 229.9</span>
                                                                    <span>
                                                                        <del>$239.9</del>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon">
                                                                <a href="#">
                                                                    <i className="far fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart-img">
                                                                <a href="#">
                                                                    <img src="./assets/pro2.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content">
                                                                <h3>
                                                                    <a href="#">Black &amp; White Shoes</a>
                                                                </h3>
                                                                <div className="cart-price">
                                                                    <span className="new">$ 229.9</span>
                                                                    <span>
                                                                        <del>$239.9</del>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon">
                                                                <a href="#">
                                                                    <i className="far fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart-img">
                                                                <a href="#">
                                                                    <img src="./assets/pro3.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content">
                                                                <h3>
                                                                    <a href="#">Black &amp; White Shoes</a>
                                                                </h3>
                                                                <div className="cart-price">
                                                                    <span className="new">$ 229.9</span>
                                                                    <span>
                                                                        <del>$239.9</del>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon">
                                                                <a href="#">
                                                                    <i className="far fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="total-price">
                                                                <span className="f-left">Total:</span>
                                                                <span className="f-right">$300.0</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="checkout-link">
                                                                <a href="#">Shopping Cart</a>
                                                                <a className="red-color" href="#">Checkout</a>
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
                    {/* header end */}
                    <main>
                        {/* breadcrumb-area-start */}
                        <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="breadcrumb-text text-center">
                                            <h1>Register</h1>
                                            <ul className="breadcrumb-menu">
                                                <li><a href="index.html">home</a></li>
                                                <li><span>Register</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* breadcrumb-area-end */}
                        {/* login Area Strat*/}
                        <section className="login-area pt-100 pb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="basic-login">
                                            <h3 className="text-center mb-60">Signup From Here</h3>
                                            <form action="#">
                                                <label htmlFor="name">Username <span>**</span></label>
                                                <input id="name" type="text" placeholder="Enter Username or Email address..." />
                                                <label htmlFor="email-id">Email Address <span>**</span></label>
                                                <input id="email-id" type="text" placeholder="Enter Username or Email address..." />
                                                <label htmlFor="pass">Password <span>**</span></label>
                                                <input id="pass" type="password" placeholder="Enter password..." />
                                                <div className="mt-10" />
                                                <button className="btn theme-btn-2 w-100">Register Now</button>
                                                <div className="or-divide"><span>or</span></div>
                                                <button className="btn theme-btn w-100">login Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* login Area End*/}
                    </main>
                    {/* footer start */}
                    <footer className="footer-area pl-100 pr-100">
                        <div className="footer-area box-90 pt-100 pb-60" data-background="img/bg/footer.jpg" style={{ backgroundImage: 'url("img/bg/footer.jpg")' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6 col-md-6 ">
                                        <div className="footer-widget mb-40 pr-70">
                                            <div className="footer-logo">
                                                <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                              ut labore et dolore mag na
                                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                              ex ea commodo consequat.
                              </p>
                                            <div className="footer-time d-flex mt-30">
                                                <div className="time-icon">
                                                    <img src="./assets/time.png" alt="" />
                                                </div>
                                                <div className="time-text">
                                                    <span>Got Questions ? Call us 24/7!</span>
                                                    <h2>(0600) 874 548</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3">
                                        <div className="footer-widget mb-40">
                                            <h3>Social Media</h3>
                                            <ul className="footer-link">
                                                <li><a href="#">Facebook</a></li>
                                                <li><a href="#">Twitter</a></li>
                                                <li><a href="#">Behance</a></li>
                                                <li><a href="#"> Dribbble</a></li>
                                                <li><a href="#">Linkedin</a></li>
                                                <li><a href="#">Youtube</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
                                        <div className="footer-widget pl-50 mb-40">
                                            <h3>Location</h3>
                                            <ul className="footer-link">
                                                <li><a href="#">New York</a></li>
                                                <li><a href="#">Tokyo</a></li>
                                                <li><a href="#">Dhaka</a></li>
                                                <li><a href="#">Chittagong</a></li>
                                                <li><a href="#">China</a></li>
                                                <li><a href="#">Japan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3">
                                        <div className="footer-widget mb-40">
                                            <h3>About</h3>
                                            <ul className="footer-link">
                                                <li><a href="#">Terms &amp; Conditions</a></li>
                                                <li><a href="#"> Privacy Policy</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Wholesale</a></li>
                                                <li><a href="#">Direction</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* footer end */}
                    {/* Fullscreen search */}
                    <div className="search-wrap">
                        <div className="search-inner">
                            <i className="fas fa-times search-close" id="search-close" />
                            <div className="search-cell">
                                <form method="get">
                                    <div className="search-field-holder">
                                        <input type="search" className="main-search-input" placeholder="Search Entire Store..." />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> {/* end fullscreen search */}
                </div>
            );
        };

export default Register