import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList(props) {
  const [sortNameAtoZ, setSortNameAtoZ] = useState(false);
  const [sortNameZtoA, setSortNameZtoA] = useState(false);
  const [sortPriceHtoL, setSortPriceHtoL] = useState(false);
  const [sortPriceLtoH, setSortPriceLtoH] = useState(false);
  const [sortTopSale, setSortTopSale] = useState(false);
  const [searchString, setSearchString] = useState();
  const [searchProducts, setSearchProducts] = useState(false);
  const {
    onAddToCart,
    getProducts,
    dssp,
    searchProduct,
    searchProductList,
  } = props;

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };
  const handleSubmit = () => {
    searchProduct(searchString);
    setSearchProducts(true);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <main>
      {/* shop-area start */}
      <section className="shop-area pt-150 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              {/* tab filter */}
              <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="product-showing mb-40">
                    <p>Showing 1–22 of 32 results</p>
                  </div>
                </div>
              </div>
              {/* tab content */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    {sortNameAtoZ
                      ? dssp
                          .sort(
                            (a, b) =>
                              a.name.charCodeAt(0) - b.name.charCodeAt(0)
                          )
                          .map((elm, i) => {
                            return (
                              <ProductItem
                                key={i}
                                product={elm}
                                onAddToCart={onAddToCart}
                              />
                            );
                          })
                      : sortNameZtoA
                      ? dssp
                          .sort(
                            (a, b) =>
                              b.name.charCodeAt(0) - a.name.charCodeAt(0)
                          )
                          .map((elm, i) => {
                            return (
                              <ProductItem
                                key={i}
                                product={elm}
                                onAddToCart={onAddToCart}
                              />
                            );
                          })
                      : sortPriceHtoL
                      ? dssp
                          .sort(
                            (a, b) =>
                              parseInt(b.final_price) - parseInt(a.final_price)
                          )
                          .map((elm, i) => {
                            return (
                              <ProductItem
                                key={i}
                                product={elm}
                                onAddToCart={onAddToCart}
                              />
                            );
                          })
                      : sortPriceLtoH
                      ? dssp
                          .sort(
                            (a, b) =>
                              parseInt(a.final_price) - parseInt(b.final_price)
                          )
                          .map((elm, i) => {
                            return (
                              <ProductItem
                                key={i}
                                product={elm}
                                onAddToCart={onAddToCart}
                              />
                            );
                          })
                      : sortTopSale
                      ? dssp
                          .sort(
                            (a, b) => b.promotion_percent - a.promotion_percent
                          )
                          .map((elm, i) => {
                            return (
                              <ProductItem
                                key={i}
                                product={elm}
                                onAddToCart={onAddToCart}
                              />
                            );
                          })
                      : searchProducts
                      ? searchProductList.map((elm, i) => {
                          return (
                            <ProductItem
                              key={i}
                              product={elm}
                              onAddToCart={onAddToCart}
                            />
                          );
                        })
                      : dssp.map((elm, i) => {
                          return (
                            <ProductItem
                              key={i}
                              product={elm}
                              onAddToCart={onAddToCart}
                            />
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
            {/*SideBar */}
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-shop">
                <div className="shop-widget">
                  <h3 className="shop-title">Search by</h3>
                  <form onSubmit={handleSubmit} className="shop-search">
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Your keyword...."
                    />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* 
                        <div class="shop-widget">
                            <h3 class="shop-title">Filter selection</h3>
                            <div class="price-filter">
                                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                <input type="text" id="amount">
                            </div>
                        </div> */}
                <div className="shop-widget">
                  <h3 className="shop-title">SHOP BY</h3>
                  <ul className="shop-link">
                    <li>
                      <a
                        href="/#"
                        onClick={() => {
                          setSortNameAtoZ(!sortNameAtoZ);
                          setSortNameZtoA(false);
                          setSortPriceHtoL(false);
                          setSortPriceLtoH(false);
                          setSortTopSale(false);
                        }}
                      >
                        Name: A-Z
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        onClick={() => {
                          setSortNameZtoA(!sortNameZtoA);
                          setSortNameAtoZ(false);
                          setSortPriceHtoL(false);
                          setSortPriceLtoH(false);
                          setSortTopSale(false);
                        }}
                      >
                        Name: Z-A
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        onClick={() => {
                          setSortPriceHtoL(!sortPriceHtoL);
                          setSortNameAtoZ(false);
                          setSortNameZtoA(false);
                          setSortPriceLtoH(false);
                          setSortTopSale(false);
                        }}
                      >
                        Price: High to Low
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        onClick={() => {
                          setSortPriceLtoH(!sortPriceLtoH);
                          setSortNameAtoZ(false);
                          setSortPriceHtoL(false);
                          setSortNameZtoA(false);
                          setSortTopSale(false);
                        }}
                      >
                        Price: Low to High
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        onClick={() => {
                          setSortTopSale(!sortTopSale);
                          setSortNameZtoA(false);
                          setSortNameAtoZ(false);
                          setSortPriceLtoH(false);
                          setSortPriceHtoL(false);
                        }}
                      >
                        Product: Top Sales
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="shop-widget">
                  <h3 className="shop-title">Recent Product</h3>
                  <ul className="shop-sidebar-product">
                    <li>
                      <div className="side-pro-img">
                        <a href="/#">
                          <img src="./assets/shop-rsp3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="/#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="side-pro-img">
                        <a href="/#">
                          <img src="./assets/shop-rsp2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="/#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="side-pro-img">
                        <a href="/#">
                          <img src="./assets/shop-rsp4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="/#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="shop-widget">
                  <div className="shop-sidebar-banner">
                    <a href="/#">
                      <img src="./assets/shop-banner.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /SideBar */}
          </div>
        </div>
      </section>
      {/* shop-area end */}
    </main>
  );
}

export default ProductList;
