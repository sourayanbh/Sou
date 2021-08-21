import { userConstants } from "../Constants/Constants";
import { userLogin } from "../Services/services";


const loginRequest = () => {
    return {
        type : userConstants.FETCH_USER_REQUEST,
    }
}


const loginsuccess = () => {
    return {
        type : userConstants.LOGIN_SUCCESS,
    }
}


const loginFaliure = () => {
    return {
        type : userConstants.FETCH_USER_FALIURE,
    }
}

const login = (formData) => {
    return dispatch => {
        dispatch(loginRequest())

        userLogin.login(formData)
        .then((user) => {
               dispatch(loginsuccess(user)) 
        }),
        error => {
            dispatch(loginFaliure(error))
        }
    }
}


export default login

