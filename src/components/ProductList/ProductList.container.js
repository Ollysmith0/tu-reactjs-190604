import { connect } from "react-redux";
import ProductList from "./ProductList";
import { getProducts, searchProduct } from "./ProductList.action";

export const prmotedProductsSelector = (state) => {
  // return state.productListReducer.data.filter(elm => elm.price > elm.final_price)
};

const mapStateToProps = (state) => {
  return {
    dssp: state.productListReducer.result,
    searchProductList: state.productListReducer.result.data
      ? state.productListReducer.result.data
      : state.productListReducer.result,
    // proomotedProducts: state.productListReducer.result.filter(elm => elm.price > elm.final_price)
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
  searchProduct: searchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
