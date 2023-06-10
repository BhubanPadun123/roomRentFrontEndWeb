import * as actionTypes from "../actionTypes"
import axios from "axios"

const URL = "http://localhost:8081"
export const GetAllRoom = (props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.GET_ALL_ROOM_STATUS,
            payload:{}
        })

        const roomList = await axios.get(`${URL}/getroom`)

        if(roomList){
            dispatch({
                type:actionTypes.GET_ALL_ROOM_RESPONSE,
                payload:roomList.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.GET_ALL_ROOM_ERROR,
            payload:error
        })
    }
}

export const RegisterRoom=(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.REGISTER_ROOM_STATUS,
            payload:{}
        })

        const roomRegister = await axios.post(`${URL}/register_room`,props)

        if(roomRegister){
            dispatch({
                type:actionTypes.REGISTER_ROOM_RESPONSE,
                payload:roomRegister.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.REGISTER_ROOM_ERROR,
            payload:error
        })
    }
}

export const UploadRoomImage=(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.UPLOAD_ROOM_IMAGE_STATUS,
            payload:{}
        })

        const imageUpload = await axios.post(`${URL}/uploadRoomImg/${props.contactNumber}`,props.formData)

        if(imageUpload){
            dispatch({
                type:actionTypes.UPLOAD_ROOM_IMAGE_RESPONSE,
                payload:imageUpload.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.UPLOAD_ROOM_IMAGE_ERROR,
            payload:error
        })
    }
}

export const AddToBookingList=(props)=>async(dispatch)=>{
    console.log(props)
    try{
        dispatch({
            type:actionTypes.ADD_TO_BOOKING_LIST,
            payload:{}
        })
        const addRoom = await axios.post(`${URL}/bookingBoom/${props.customerContact}`,props)

        if(addRoom){
            dispatch({
                type:actionTypes.ADD_TO_BOOKING_LIST_RESPONSE,
                payload:addRoom.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.ADD_TO_BOOKING_LIST_ERROR,
            payload:error
        })
    }
}

export const GetAddedList=(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.GET_ADDED_LIST_STATUS,
            payload:{}
        })

        const addedRoom = await axios.get(`${URL}/bookedRoom/${props.customerNumber}`,props)

        if(addedRoom){
            dispatch({
                type:actionTypes.GET_ADDED_LIST_RESPONSE,
                payload:addedRoom.data
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.GET_ADDED_LIST_ERROR,
            payload:error
        })
    }
}