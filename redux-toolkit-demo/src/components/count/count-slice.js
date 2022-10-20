import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "countSlide",
    initialState: {
        count: 0,
        temp: "check"
    },
    reducers: {
        switchNumber(state, action){
            state.count = action.payload
        },
        addOne(state, action){
            state.count += 1
        }
    }
})

const {actions, reducer} = countSlice;

export const {switchNumber, addOne} = actions;
export default reducer;