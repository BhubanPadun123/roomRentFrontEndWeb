import * as actionTypes from "../actionTypes"

const roomCollectionInitilState ={
    room_list_status:"",
    room_list_response:[],
    room_list_error:""
}

export const RoomListReducer=(state=roomCollectionInitilState,action)=>{
    switch(action.type){
        case actionTypes.GET_ALL_ROOM_STATUS:
            state =[
                {
                    room_list_status:"started",
                    room_list_response:[],
                    room_list_error:""
                }
            ]
            return state
            break
        case actionTypes.GET_ALL_ROOM_RESPONSE:
            state =[
                {
                    room_list_status:"success",
                    room_list_response:action.payload,
                    room_list_error:""
                }
            ]
            return state
            break
        case actionTypes.GET_ALL_ROOM_ERROR:
            state=[
                {
                    room_list_status:"failed",
                    room_list_response:[],
                    room_list_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}

const initialRoomRegisterState = {
    room_register_status:"",
    room_register_response:[],
    room_register_error:""
}

export const RoomRegisterReducer=(state=initialRoomRegisterState,action)=>{
    switch(action.type){
        case actionTypes.REGISTER_ROOM_STATUS:
            state=[
                {
                    room_register_status:"started",
                    room_register_response:[],
                    room_register_error:""
                }
            ]
            return state
            break
        case actionTypes.REGISTER_ROOM_RESPONSE:
            state =[
                {
                    room_register_status:"success",
                    room_register_response:action.payload,
                    room_register_error:""
                }
            ]
            return state
            break
        case actionTypes.REGISTER_ROOM_ERROR:
            state =[
                {
                    room_register_status:"failed",
                    room_register_response:[],
                    room_register_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}

const initialRoomImgState = {
    upload_room_img_status:"",
    upload_room_img_response:[],
    upload_room_img_error:""
}

export const RoomImageUploadReducer=(state=initialRoomImgState,action)=>{
    switch(action.type){
        case actionTypes.UPLOAD_ROOM_IMAGE_STATUS:
            state=[
                {
                    upload_room_img_status:"started",
                    upload_room_img_response:[],
                    upload_room_img_error:""
                }
            ]
            return state
            break
        case actionTypes.UPLOAD_ROOM_IMAGE_RESPONSE:
            state =[
                {
                    upload_room_img_status:"success",
                    upload_room_img_response:action.payload,
                    upload_room_img_error:""
                }
            ]
            return state
            break
        case actionTypes.UPLOAD_ROOM_IMAGE_ERROR:
            state =[
                {
                    upload_room_img_status:"failed",
                    upload_room_img_response:[],
                    upload_room_img_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}

const initialAddRoomState = {
    add_room_status:"",
    add_room_response:[],
    add_room_error:""
}

export const AddRoomReducer=(state=initialAddRoomState,action)=> {
    switch(action.type){
        case actionTypes.ADD_TO_BOOKING_LIST:
            state=[
                {
                    add_room_status:"started",
                    add_room_response:[],
                    add_room_error:""
                }
            ]
            return state
            break
        case actionTypes.ADD_TO_BOOKING_LIST_RESPONSE:
            state = [
                {
                    add_room_status:"success",
                    add_room_response:action.payload,
                    add_room_error:""
                }
            ]
            return state
            break
        case actionTypes.ADD_TO_BOOKING_LIST_ERROR:
            state =[
                {
                    add_room_status:"failed",
                    add_room_response:[],
                    add_room_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
}

const AddRoomState = {
    add_room_status:"",
    add_room_response:[],
    add_room_error:""
}

export const GetAddedRoomReducer=(state=AddRoomState,action)=>{
    switch(action.type){
        case actionTypes.GET_ADDED_LIST_STATUS:
            state =[
                {
                    add_room_status:"started",
                    add_room_response:[],
                    add_room_error:""
                }
            ]
            return state
            break
        case actionTypes.GET_ADDED_LIST_RESPONSE:
            state = [
                {
                    add_room_status:"success",
                    add_room_response:action.payload,
                    add_room_error:""
                }
            ]
            return state
            break
        case actionTypes.GET_ADDED_LIST_ERROR:
            state = [
                {
                    add_room_status:"failed",
                    add_room_response:[],
                    add_room_error:action.payload
                }
            ]
            return state
            break
        default:
            return state
    }
   
}