import {UserSignInReducer,UserLoginReducer} from "./UserReducer"
import {RoomListReducer,RoomRegisterReducer,RoomImageUploadReducer,AddRoomReducer,GetAddedRoomReducer} from "./RoomReducer"
import { combineReducers } from "redux"
import { PasswordResetRed } from "./Reset"

const rootReducer = combineReducers({
    UserSignInReducer,
    UserLoginReducer,
    RoomListReducer,
    RoomRegisterReducer,
    RoomImageUploadReducer,
    AddRoomReducer,
    GetAddedRoomReducer,
    PasswordResetRed
})

export default rootReducer
