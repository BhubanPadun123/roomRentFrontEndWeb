import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const middleWare = [thunk]

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)


export default Store