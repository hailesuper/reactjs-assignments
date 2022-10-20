import {createSlice} from "@reduxjs/toolkit";

const logInSlice = createSlice({
    name: "log-in",
    initialState: {
        user: {
            "id": null,
            "fullName": "",
            "username": "",
            "role": ""
        }
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state, action) => (
            state.user = {}
        )
    }
})

const {actions, reducer} = logInSlice;
export const {logIn, logOut} = actions;
export default reducer;