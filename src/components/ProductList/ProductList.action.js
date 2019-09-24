export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR"

export function getProductListRequest(){
    return {
        type: PRODUCT_LIST_REQUEST
        //payload
    }
}

export function getProductListSuccess(item) {
    return{
        type: PRODUCT_LIST_SUCCESS,
        payload: item
    }
}

export function getProductListError(error) {
    return{
        type: PRODUCT_LIST_ERROR,
        error: error
    }
}

export function getProducts() {
    return (dispatch) => {
        dispatch(getProductListRequest())  
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=M%C3%B3c%20kho%C3%A1%20m%C3%A8o%20cute")
            .then(r => r.json())
            .then(result => dispatch(getProductListSuccess(result.data)))
            .catch(error => dispatch(getProductListError(error)))

    }
}

