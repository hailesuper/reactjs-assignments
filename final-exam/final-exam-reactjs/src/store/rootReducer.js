import {combineReducers} from "@reduxjs/toolkit";
import {logInUserSlice} from "./user/logInUserSlice";
import {groupSlice} from "./group/groupSlice";
import {snackBarSlice} from "./snackbar/snackBarSlice";
import {alertDialogSlice} from "./alertDialog/alertDialogSlice";

const rootReducer = combineReducers({
    logInUser: logInUserSlice.reducer,
    group: groupSlice.reducer,
    snackBar: snackBarSlice.reducer,
    alertDialog: alertDialogSlice.reducer
})

export default rootReducer;