import { createSlice } from '@reduxjs/toolkit'
import storage from "../../storage/storage";

const initialState = {
    groups: [],
    order: "asc",
    page: 1,
    size: 5,
    totalSize: 10
}

export const groupSlice = createSlice({
    name: 'groupSlice',
    initialState,
    reducers: {
        setGroups: (state, actions) => {
            state.groups = actions.payload;
        },
        setGroupPage: (state, actions) => {
            state.page = actions.payload;
        },
        setGroupSize: (state, actions) => {
            state.size = actions.payload;
        },
        setGroupTotalSize: (state, actions) => {
            state.totalSize = actions.payload;
        },
        setGroupOrder: (state, actions) => {
            state.order = actions.payload;
        }
    },
})

// Action creators are generated for each case reducer function
const {actions} = groupSlice;
export const { setGroups, setGroupPage, setGroupSize, setGroupTotalSize, setGroupOrder } = actions;
export default groupSlice.reducer;