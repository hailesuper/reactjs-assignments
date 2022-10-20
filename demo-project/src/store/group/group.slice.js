import {createSlice} from "@reduxjs/toolkit";

export const groupSlice = createSlice({
    name: "groups",
    initialState: [],
    reducers: {
        updateGroups: (state, actions) => {
            state.push(...actions.payload);
            // state = actions.payload;
        }
    }
})

const {actions, reducer} = groupSlice;
export const {updateGroups} = actions;
export default reducer;
