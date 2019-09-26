import firebaseApp from '../../firebase'
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"


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

function loginError(error) {
    return{
        type: LOGIN_ERROR,
        error: error
    }
}

export function getLogin(email,password) {
    return async (dispatch) => {
        try{
            dispatch(loginRequest())
            const result = await firebaseApp.auth().signInWithEmailAndPassword(email,password);
            dispatch(loginSuccess(result))
        }catch(error){
            dispatch(loginError(error.message))
        }

    }
}

