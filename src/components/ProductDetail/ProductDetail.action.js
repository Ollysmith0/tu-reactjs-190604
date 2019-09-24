export const GET_PRODUCTDETAIL_REQUEST = "GET_PRODUCTDETAIL_REQUEST"
export const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS"
export const GET_PRODUCTDETAIL_FAIL = "GET_PRODUCTDETAIL_FAIL"
export const VIEW_PRODUCT_DETAIL = `VIEW_PRODUCT_DETAIL`

export function getProductDetailRequest(){
    return {
        type: GET_PRODUCTDETAIL_REQUEST
        //payload
    }
}

export function getProductDetailSuccess(email, password) {
    return{
        type: GET_PRODUCTDETAIL_SUCCESS,
        payload: {
            email, password
        }
    }
}

export function getProductDetailFail(error) {
    return{
        type: GET_PRODUCTDETAIL_FAIL,
        error: error
    }
}

