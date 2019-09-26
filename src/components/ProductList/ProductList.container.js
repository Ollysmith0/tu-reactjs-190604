import { connect } from 'react-redux'
import ProductList from './ProductList'
import { getProducts } from './ProductList.action'

export const prmotedProductsSelector = (state) => {
  // return state.productListReducer.data.filter(elm => elm.price > elm.final_price)
}

const mapStateToProps = (state) => {
    console.log(state, 'console');
  return {
    dssp: state.productListReducer.result,
    // proomotedProducts: state.productListReducer.result.filter(elm => elm.price > elm.final_price)
  }
}

const mapDispatchToProps = {
  getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)