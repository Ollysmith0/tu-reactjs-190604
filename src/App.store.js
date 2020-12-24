import { createStore, combineReducers, applyMiddleware } from "redux";
import productListReducer from "./components/ProductList/ProductList.reducer";
import registerReducer from "./components/Register/Register.reducer";
import productDetailReducer from "./components/ProductDetail/ProductDetail.reducer";
import loginReducer from "./components/Login/Login.reducer";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    loginReducer,
    registerReducer,
    productListReducer,
    productDetailReducer,
  }),
  applyMiddleware(thunk)
);
