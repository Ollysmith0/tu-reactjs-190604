export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGIN = `LOGIN`

export default function loginRequest(){
    return {
        type: LOGIN_REQUEST
        //payload
    }
}

function loginSuccess(email, password) {
    return{
        type: LOGIN_SUCCESS,
        payload: {
            email, password
        }
    }
}

function loginFail(error) {
    return{
        type: LOGIN_FAIL,
        error: error
    }
}

