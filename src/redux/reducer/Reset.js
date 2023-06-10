import * as actionTypes from "../actionTypes"

const initialPasswordState = {
    password_reset_status : "",
    password_reset_response :[],
    password_reset_error:""
}

export const PasswordResetRed = (state=initialPasswordState,action)=>{
    switch(action.type){
        case actionTypes.RESET_PASSWORD:
            state=[
                {
                    password_reset_status:"started",
                    password_reset_response:[],
                    password_reset_error:""
                }
            ]
            return state
            break
        case actionTypes.RESET_PASSWORD_RESPONSE:
            state=[
                {
                    password_reset_status:"success",
                    password_reset_response:action.payload,
                    password_reset_error:""
                }
            ]
            return state
            break
        case actionTypes.RESET_PASSWORD_ERROR:
            state =[
                {
                    password_reset_status:"failed",
                    password_reset_response:[],
                    password_reset_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}