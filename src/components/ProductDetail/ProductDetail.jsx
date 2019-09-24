import React, { useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom'
const Detail = (props) => {
    const [product, setProduct] = useState(null)
    function getProductDetail(id) {
        fetch(`https://mapi.sendo.vn/mob/product/${id}/detail/`)
        .then(r => r.json())
        .then((result) => {
            console.log(result)          // renderDetail(result.description);
            setProduct(result)
        });
      }
    const id = props.match.params.id
    useEffect(() => {
        getProductDetail(id)
    }, [id])

    if(!product) {
        return 'Loadding,.....'
    }
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
                                    <h1>Our Shop</h1>
                                    <ul className="breadcrumb-menu">
                                        <li><a href="index.html">home</a></li>
                                        <li><span>shop details</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* shop-area start */}
                <section className="shop-details-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4">
                                <div className="product-details-img mb-10">
                                    <div className="tab-content" id="myTabContentpro">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel">
                                            <div className="product-large-img">
                                                <img src="img/product/pro1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel">
                                            <div className="product-large-img">
                                                <img src="img/product/pro2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile1" role="tabpanel">
                                            <div className="product-large-img">
                                                <img src="img/product/pro3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-thumb-tab mb-30">
                                    <ul className="nav" id="myTab2" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-selected="true"><img src="img/product/pro1.jpg" alt="" /> </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="false"><img src="img/product/pro2.jpg" alt="" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#profile1" role="tab" aria-selected="false"><img src="img/product/pro3.jpg" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="product-details mb-30 pl-30">
                                    <div className="details-cat mb-20">
                                        <a href="#">decor,</a>
                                        <a href="#">furniture</a>
                                    </div>
                                    <h2 className="pro-details-title mb-15">{product.name}</h2>
                                    <div className="details-price mb-20">
                                        <span>{product.final_price.toLocaleString()} VND</span>
                                        <span className="old-price">{product.price.toLocaleString()} VND</span>
                                    </div>
                                    <div className="product-variant">
                                        <div className="product-info-list variant-item">
                                            <ul>
                                                <li><span>Brands:</span> Hewlett-Packard</li>
                                                <li><span>Product Code:</span> d12</li>
                                                <li><span>Reward Points:</span> 100</li>
                                                <li><span>Stock:</span> <span className="in-stock">In Stock</span></li>
                                            </ul>
                                        </div>
                                        <div className="product-action-details variant-item">
                                            <div className="product-details-action">
                                                <form action="#">
                                                    <div className="plus-minus">
                                                        <div className="cart-plus-minus"><input type="text" defaultValue={1} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                    </div>
                                                    <button className="details-action-icon" type="submit"><i className="fas fa-heart" /></button>
                                                    <div className="details-cart mt-40">
                                                        <button className="btn theme-btn">purchase now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-8 col-lg-8">
                                <div className="product-review">
                                    <ul className="nav review-tab" id="myTabproduct" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab6" data-toggle="tab" href="#home6" role="tab" aria-controls="home" aria-selected="true">Description </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab6" data-toggle="tab" href="#profile6" role="tab" aria-controls="profile" aria-selected="false">Reviews (2)</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent2">
                                        <div className="tab-pane fade show active" id="home6" role="tabpanel" aria-labelledby="home-tab6">
                                            <div className="desc-text">
                                                <div dangerouslySetInnerHTML={{__html: product.description}}/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile6" role="tabpanel" aria-labelledby="profile-tab6">
                                            <div className="desc-text review-text">
                                                <div className="product-commnets">
                                                    <div className="product-commnets-list mb-25 pb-15">
                                                        <div className="pro-comments-img">
                                                            <img src="img/product/comments/01.png" alt="" />
                                                        </div>
                                                        <div className="pro-commnets-text">
                                                            <h4>Roger West -
                                            <span>June 5, 2018</span>
                                                            </h4>
                                                            <div className="pro-rating">
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                              incididunt
                                                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-commnets-list mb-25 pb-15">
                                                        <div className="pro-comments-img">
                                                            <img src="img/product/comments/02.png" alt="" />
                                                        </div>
                                                        <div className="pro-commnets-text">
                                                            <h4>Roger West -
                                            <span>June 5, 2018</span>
                                                            </h4>
                                                            <div className="pro-rating">
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                              incididunt
                                                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-box mt-50">
                                                    <h4>Add a Review</h4>
                                                    <div className="your-rating mb-40">
                                                        <span>Your Rating:</span>
                                                        <div className="rating-list">
                                                            <a href="#">
                                                                <i className="far fa-star" />
                                                            </a>
                                                            <a href="#">
                                                                <i className="far fa-star" />
                                                            </a>
                                                            <a href="#">
                                                                <i className="far fa-star" />
                                                            </a>
                                                            <a href="#">
                                                                <i className="far fa-star" />
                                                            </a>
                                                            <a href="#">
                                                                <i className="far fa-star" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <form className="review-form" action="#">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <label htmlFor="message">YOUR REVIEW</label>
                                                                <textarea name="message" id="message" cols={30} rows={10} defaultValue={""} />
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <label htmlFor="r-name">Name</label>
                                                                <input type="text" id="r-name" />
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <label htmlFor="r-email">Email</label>
                                                                <input type="email" id="r-email" />
                                                            </div>
                                                            <div className="col-xl-12">
                                                                <button className="btn theme-btn">Add your Review</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="pro-details-banner">
                                    <a href="shop.html"><img src="img/banner/pro-details.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* shop-area end */}
                {/* product-area start */}
                <section className="product-area pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="area-title text-center mb-50">
                                    <h2>Releted Products</h2>
                                    <p>Browse the huge variety of our products</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-slider-2 owl-carousel">
                            <div className="pro-item">
                                <div className="product-wrapper">
                                    <div className="product-img mb-25">
                                        <a href="product-details.html">
                                            <img src="img/product/pro4.jpg" alt="" />
                                            <img className="secondary-img" src="img/product/pro5.jpg" alt="" />
                                        </a>
                                        <div className="product-action text-center">
                                            <a href="#" title="Shoppingb Cart">
                                                <i className="flaticon-shopping-cart" />
                                            </a>
                                            <a href="#" title="Quick View">
                                                <i className="flaticon-eye" />
                                            </a>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="flaticon-compare" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="pro-cat mb-10">
                                            <a href="shop.html">decor, </a>
                                            <a href="shop.html">furniture</a>
                                        </div>
                                        <h4>
                                            <a href="product-details.html">Raglan Baseball Style shirt</a>
                                        </h4>
                                        <div className="product-meta">
                                            <div className="pro-price">
                                                <span>$119.00 USD</span>
                                                <span className="old-price">$230.00 USD</span>
                                            </div>
                                        </div>
                                        <div className="product-wishlist">
                                            <a href="#"><i className="far fa-heart" title="Wishlist" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-item">
                                <div className="product-wrapper">
                                    <div className="product-img mb-25">
                                        <a href="product-details.html">
                                            <img src="img/product/pro5.jpg" alt="" />
                                            <img className="secondary-img" src="img/product/pro6.jpg" alt="" />
                                        </a>
                                        <div className="product-action text-center">
                                            <a href="#" title="Shoppingb Cart">
                                                <i className="flaticon-shopping-cart" />
                                            </a>
                                            <a href="#" title="Quick View">
                                                <i className="flaticon-eye" />
                                            </a>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="flaticon-compare" />
                                            </a>
                                        </div>
                                        <div className="sale-tag">
                                            <span className="new">new</span>
                                            <span className="sale">sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="pro-cat mb-10">
                                            <a href="shop.html">decor, </a>
                                            <a href="shop.html">furniture</a>
                                        </div>
                                        <h4>
                                            <a href="product-details.html">Raglan Baseball Style shirt</a>
                                        </h4>
                                        <div className="product-meta">
                                            <div className="pro-price">
                                                <span>$119.00 USD</span>
                                                <span className="old-price">$230.00 USD</span>
                                            </div>
                                        </div>
                                        <div className="product-wishlist">
                                            <a href="#"><i className="far fa-heart" title="Wishlist" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-item">
                                <div className="product-wrapper">
                                    <div className="product-img mb-25">
                                        <a href="product-details.html">
                                            <img src="img/product/pro7.jpg" alt="" />
                                            <img className="secondary-img" src="img/product/pro8.jpg" alt="" />
                                        </a>
                                        <div className="product-action text-center">
                                            <a href="#" title="Shoppingb Cart">
                                                <i className="flaticon-shopping-cart" />
                                            </a>
                                            <a href="#" title="Quick View">
                                                <i className="flaticon-eye" />
                                            </a>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="flaticon-compare" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="pro-cat mb-10">
                                            <a href="shop.html">decor, </a>
                                            <a href="shop.html">furniture</a>
                                        </div>
                                        <h4>
                                            <a href="product-details.html">Raglan Baseball Style shirt</a>
                                        </h4>
                                        <div className="product-meta">
                                            <div className="pro-price">
                                                <span>$119.00 USD</span>
                                                <span className="old-price">$230.00 USD</span>
                                            </div>
                                        </div>
                                        <div className="product-wishlist">
                                            <a href="#"><i className="far fa-heart" title="Wishlist" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-item">
                                <div className="product-wrapper">
                                    <div className="product-img mb-25">
                                        <a href="product-details.html">
                                            <img src="img/product/pro9.jpg" alt="" />
                                            <img className="secondary-img" src="img/product/pro10.jpg" alt="" />
                                        </a>
                                        <div className="product-action text-center">
                                            <a href="#" title="Shoppingb Cart">
                                                <i className="flaticon-shopping-cart" />
                                            </a>
                                            <a href="#" title="Quick View">
                                                <i className="flaticon-eye" />
                                            </a>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="flaticon-compare" />
                                            </a>
                                        </div>
                                        <div className="sale-tag">
                                            <span className="new">new</span>
                                            <span className="sale">sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="pro-cat mb-10">
                                            <a href="shop.html">decor, </a>
                                            <a href="shop.html">furniture</a>
                                        </div>
                                        <h4>
                                            <a href="product-details.html">Raglan Baseball Style shirt</a>
                                        </h4>
                                        <div className="product-meta">
                                            <div className="pro-price">
                                                <span>$119.00 USD</span>
                                                <span className="old-price">$230.00 USD</span>
                                            </div>
                                        </div>
                                        <div className="product-wishlist">
                                            <a href="#"><i className="far fa-heart" title="Wishlist" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-item">
                                <div className="product-wrapper">
                                    <div className="product-img mb-25">
                                        <a href="product-details.html">
                                            <img src="img/product/pro1.jpg" alt="" />
                                            <img className="secondary-img" src="img/product/pro11.jpg" alt="" />
                                        </a>
                                        <div className="product-action text-center">
                                            <a href="#" title="Shoppingb Cart">
                                                <i className="flaticon-shopping-cart" />
                                            </a>
                                            <a href="#" title="Quick View">
                                                <i className="flaticon-eye" />
                                            </a>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="flaticon-compare" />
                                            </a>
                                        </div>
                                        <div className="sale-tag">
                                            <span className="new">new</span>
                                            <span className="sale">sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="pro-cat mb-10">
                                            <a href="shop.html">decor, </a>
                                            <a href="shop.html">furniture</a>
                                        </div>
                                        <h4>
                                            <a href="product-details.html">Raglan Baseball Style shirt</a>
                                        </h4>
                                        <div className="product-meta">
                                            <div className="pro-price">
                                                <span>$119.00 USD</span>
                                                <span className="old-price">$230.00 USD</span>
                                            </div>
                                        </div>
                                        <div className="product-wishlist">
                                            <a href="#"><i className="far fa-heart" title="Wishlist" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product-area end */}
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
export default withRouter(Detail)