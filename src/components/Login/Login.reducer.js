import { LOGIN } from './Login.action'

const initialState = {
    selectedItems: []
}

export default function loginReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                selectedItems:[...state.selectedItems, action.payload]
            }
        
        default:
            return state
    }
}