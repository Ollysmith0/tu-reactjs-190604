export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export function getProductListRequest() {
  return {
    type: PRODUCT_LIST_REQUEST,
    //payload
  };
}

export function getProductListSuccess(item) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: item,
  };
}

export function getProductListError(error) {
  return {
    type: PRODUCT_LIST_ERROR,
    error: error,
  };
}

export function getSearchProductSuccess(item) {
  return {
    type: PRODUCTS_SUCCESS,
    payload: item,
  };
}

export function getSearchProductError(error) {
  return {
    type: PRODUCTS_ERROR,
    error: error,
  };
}

export function getProducts() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://mapi.sendo.vn/mob/product";
  return (dispatch) => {
    dispatch(getProductListRequest());
    return fetch(proxyUrl + targetUrl)
      .then((r) => r.json())
      .then((result) => dispatch(getProductListSuccess(result)))
      .catch((error) => dispatch(getProductListError(error)));
  };
}

export function searchProduct(params) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://mapi.sendo.vn/mob/product/search?p=1&q=${params}`;
  return (dispatch) => {
    dispatch(getProductListRequest());
    return fetch(proxyUrl + targetUrl)
      .then((r) => r.json())
      .then((result) => dispatch(getSearchProductSuccess(result)))
      .catch((error) => dispatch(getSearchProductError(error)));
  };
}
