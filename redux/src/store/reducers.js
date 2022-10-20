import {combineReducers} from "redux";
import {sumReducer} from "./sumReducer";

export const rootReducer = combineReducers(
    {
        sumReducer
    }
);