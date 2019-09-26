import { GET_PRODUCTDETAIL_ERROR, GET_PRODUCTDETAIL_SUCCESS, GET_PRODUCTDETAIL_REQUEST } from './ProductDetail.action'

const initialState = {
    result: null,
    load: false,
    error: null
}

export default function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTDETAIL_REQUEST:
            return {...state, load: true};
        case GET_PRODUCTDETAIL_SUCCESS:
            return {...state, load:false, result:action.payload};
        case GET_PRODUCTDETAIL_ERROR:
            return {...state, load:false, error:action.error};
        default:
            return state;
    }
}