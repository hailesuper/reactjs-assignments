import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: ["/"],
    reducers: {
        addAdminMenu(state, action) {
           state.push(action.payload);
        },
        removeAdminMenu(state, action) {
            state = state.filter(menuItem => action.payload.includes(menuItem))
        }
    }
})
const {actions, reducer} = menuSlice;

export const {addAdminMenu, removeAdminMenu} = actions;

export default reducer;