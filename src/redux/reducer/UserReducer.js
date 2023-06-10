import * as actionTypes from "../actionTypes"

const signInInitialState = {
    user_sign_in_status:"",
    user_sign_in_response:[],
    user_sign_in_error:"",
}

export const UserSignInReducer=(state=signInInitialState,action)=>{
    switch(action.type){
        case actionTypes.USER_SIGN_IN_STATUS:
            state=[
                {
                    user_sign_in_status:"started",
                    user_sign_in_response:[],
                    user_sign_in_error:""
                }
            ]
            return state
            break
        case actionTypes.USER_SIGN_IN_RESPONSE:
            state=[
                {
                    user_sign_in_status:"success",
                    user_sign_in_response:action.payload,
                    user_sign_in_error:""
                }
            ]
            return state
            break
        case actionTypes.USER_SIGN_IN_FAILED:
            state=[
                {
                    user_sign_in_status:"failed",
                    user_sign_in_response:[],
                    user_sign_in_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}

const loginInitialState={
    user_login_status:"",
    user_login_response:[],
    user_login_error:""
}

export const UserLoginReducer=(state=loginInitialState,action)=>{
    switch(action.type){
        case actionTypes.USER_LOGIN_STATUS:
            state=[
                {
                    user_login_status:"started",
                    user_login_response:[],
                    user_login_error:""
                }
            ]
            return state
            break
        case actionTypes.USER_LOGIN_RESPONSE:
            state=[
                {
                    user_login_status:"success",
                    user_login_response:action.payload,
                    user_login_error:""
                }
            ]
            return state
            break
        case actionTypes.USER_LOGIN_ERROR:
            state =[
                {
                    user_login_status:"failed",
                    user_login_response:[],
                    user_login_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}