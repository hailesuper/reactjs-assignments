import { createSlice } from '@reduxjs/toolkit'
import storage from "../../storage/storage";

const initialState = {
    token: storage.getToken(),
    userInfo: storage.getUserInfoToJson(),
    isRememberMe: storage.isRememberMe(),
    avatarUrl: ""
}

export const logInUserSlice = createSlice({
    name: 'logInUserSlice',
    initialState,
    reducers: {
        setToken: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.token = actions.payload;
        },
        setUserInfo: (state, actions) => {
            state.userInfo = actions.payload;
        },
        setIsRememberMe: (state, actions) => {
            state.isRememberMe = actions.payload;
        },
        setAvatarUrl: (state, actions) => {
            state.avatarUrl = actions.payload;
        }
    },
})

// Action creators are generated for each case reducer function
const {reducer, actions} = logInUserSlice;
export const { setToken, setUserInfo, setIsRememberMe, setAvatarUrl } = actions;
export default logInUserSlice.reducer;