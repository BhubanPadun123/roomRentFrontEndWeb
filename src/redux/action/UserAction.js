import * as actionTypes from "../actionTypes"
import axios from "axios"


const URL = "http://localhost:8081"
export const UserSignIn = (props) => async (dispatch) => {
    dispatch({
        type: actionTypes.USER_SIGN_IN_STATUS,
        payload: {}
    })

    const user = await axios.post(`${URL}/UserSignup`, props)
    if (user) {
        dispatch({
            type: actionTypes.USER_SIGN_IN_RESPONSE,
            payload: user.data
        })
    } else {
        dispatch({
            type: actionTypes.USER_SIGN_IN_FAILED,
            payload: "error"
        })
    }
}

export const UserLogin = (props) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.USER_LOGIN_STATUS,
            payload: {}
        })

        const user = await axios.post(`${URL}/login/${props.contactNumber}/${props.password}`)

        if(user){
            dispatch({
                type:actionTypes.USER_LOGIN_RESPONSE,
                payload:user.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.USER_LOGIN_ERROR,
            payload:error
        })
    }
    

}