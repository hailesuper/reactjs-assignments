import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: true,
    isConfirmed: false,
    contents: {
        title: "",
        content: "",
    }
}

export const alertDialogSlice = createSlice({
    name: 'alertDialogSlice',
    initialState,
    reducers: {
        setAlertDialog(state, actions) {
            state.contents = actions.payload
        },
        openAlertDialog(state) {
            state.open = true;
        },
        setConfirmedTrue(state) {
            state.isConfirmed = true;
        },
        setConfirmedFalse(state) {
            state.isConfirmed = false;
        }
        ,
        closeAlertDialog(state) {
            state.open = false;
        }
    },
})

// Action creators are generated for each case reducer function
const {reducer, actions} = alertDialogSlice;
export const { setAlertDialog, openAlertDialog, setConfirmedTrue, setConfirmedFalse, closeAlertDialog } = actions;
export default alertDialogSlice.reducer;