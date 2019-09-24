import { VIEW_PRODUCT_DETAIL } from './ProductDetail.action'

const initialState = {
    selectedItems: []
}

export default function productDetailReducer(state = initialState, action){
    switch (action.type) {
        case VIEW_PRODUCT_DETAIL:
            return {
                ...state,
                selectedItems:[...state.selectedItems, action.payload]
            }
        
        default:
            return state
    }
}