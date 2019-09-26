import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR } from './Login.action'

const initialState = {
    email: null,
    password: null,
    loading: false,
    error: null
}

export default function loginReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
            case LOGIN_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
            case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}