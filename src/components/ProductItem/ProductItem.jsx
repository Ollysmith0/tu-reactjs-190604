import React from "react";
import {Link} from 'react-router-dom'
export default function ProductItem({ product, onAddToCart}) {
  // console.log(product)
  const addToCart = () => onAddToCart(product)
  console.log(product, 'product')
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={product.img_url} alt="" />
          </a>
          <div className="product-action text-center">
            <a href="#" title="Shopping Cart" onClick={addToCart}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/chitietsanpham/${product.product_id}`}>
              <i className="fas fa-search" />
            </Link>
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