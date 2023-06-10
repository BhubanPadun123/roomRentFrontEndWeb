import * as actionTypes from "../../actionTypes"
import axios from "axios"

const URL = "http://localhost:8081"
export const ResetPassword = (data)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.RESET_PASSWORD,
            payload:{}
        })

        const password = await axios.post(`${URL}/password-reset`,data)

        if(password){
            dispatch({
                type:actionTypes.RESET_PASSWORD_RESPONSE,
                payload:password.data
            })
        }else{
            dispatch({
                type:actionTypes.RESET_PASSWORD_ERROR,
                payload:"error"
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.RESET_PASSWORD_ERROR,
            payload:error
        })
    }
}