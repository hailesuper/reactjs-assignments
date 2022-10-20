import {combineReducers} from "@reduxjs/toolkit";
import menuReducer  from "./menu/menu.slice";
import logInReducer from "./log-in/log-in.slice";
import groupReducer from "./group/group.slice";

const rootReducer = combineReducers({
    menu: menuReducer,
    logInStatus: logInReducer,
    groups: groupReducer
})

export default rootReducer;