import React from "react";

export default function ProductItem({ product, onClick }) {
  const handleClick = () => onClick(product)
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src="./assets/pro1.jpg" alt="" />
          </a>
          <div className="product-action text-center">
            <a href="#" title="Shoppingb Cart" onClick={handleClick}>
              <i className="fas fa-shopping-cart" />
            </a>
            <a href="#" title="Quick View">
              <i className="fas fa-search" />
            </a>
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            <a href="#">{product.shop}</a>
          </div>
          <h4>
            <a href="#">{product.name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{product.price} USD</span>
              <span className="old-price">{product.pricePromoted} USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}