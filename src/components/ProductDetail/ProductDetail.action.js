export const GET_PRODUCTDETAIL_REQUEST = "GET_PRODUCTDETAIL_REQUEST";
export const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS";
export const GET_PRODUCTDETAIL_ERROR = "GET_PRODUCTDETAIL_ERROR";

export function getProductDetailRequest() {
  return {
    type: GET_PRODUCTDETAIL_REQUEST,
    //payload
  };
}

export function getProductDetailSuccess(productDetail) {
  return {
    type: GET_PRODUCTDETAIL_SUCCESS,
    payload: productDetail,
  };
}

export function getProductDetailError(error) {
  return {
    type: GET_PRODUCTDETAIL_ERROR,
    error: error,
  };
}

export function getProductDetail(id) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://mapi.sendo.vn/mob/product/${id}/detail/`;
  return (dispatch) => {
    dispatch(getProductDetailRequest(id));
    return fetch(proxyUrl + targetUrl)
      .then((r) => r.json())
      .then((result) => dispatch(getProductDetailSuccess(result)))
      .catch((error) => dispatch(getProductDetailError(error)));
  };
}
