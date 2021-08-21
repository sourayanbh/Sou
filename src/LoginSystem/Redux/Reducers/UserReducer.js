import { userConstants } from "../Constants/Constants";

const initialState = {
    messege : "",
    error : "",
    token : "",
    loading : false
}


const userReducer = (state = initialState,action) => {
    switch(action.type){
        case userConstants.FETCH_USER_REQUEST : 
            return {
                messege : "",
                error : "",
                token : "",
                loading : true
            }

         case userConstants.FETCH_USER_SUCCESS : 
            return {
                messege : "",
                error : "",
                token : "",
                loading : false
            }   

          case userConstants.FETCH_USER_FALIURE : 
            return {
                messege : "",
                error : "",
                token : "",
                loading : false
            }  
    }
}