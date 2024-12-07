//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import sidebarReducer from './actions/sidebarSlice'; // sidebarSlice'dan doğru import yapılmalı
import userReducer from './reducers/userReducer'; // sidebarSlice'dan doğru import yapılmalı


const rootReducer = combineReducers({
    sidebar:sidebarReducer,
    user:userReducer,
})

export default rootReducer;