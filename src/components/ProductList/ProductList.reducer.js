import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
} from "./ProductList.action";

const initialState = {
  result: [],
  load: false,
  fail: null,
};

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, load: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case PRODUCT_LIST_ERROR:
      return { ...state, load: false, error: action.error };
    case PRODUCTS_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case PRODUCTS_ERROR:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}
