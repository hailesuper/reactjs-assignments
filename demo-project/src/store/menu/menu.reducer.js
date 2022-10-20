import {createReducer} from "@reduxjs/toolkit";
import {addAdminMenu, removeAdminMenu} from "./menu.action";

const menuReducer = createReducer(["Home"], (builder) => {
    builder
        // .addCase("ADD_ADMIN_MENU", (state, action) => {
        //     state.push(action.payload)
        // })
        // .addCase("REMOVE_ADMIN_MENU", (state, action) => {
        //     state.filter(menuItem => action.payload.includes(menuItem))
        // })
        .addCase(addAdminMenu.type, (state, action) => {
            state.push(action.payload)
        })
        .addCase(removeAdminMenu.type, (state, action) => {
            state.filter(menuItem => action.payload.includes(menuItem))
        })
})

export default menuReducer;