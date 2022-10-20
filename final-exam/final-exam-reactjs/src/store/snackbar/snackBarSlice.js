import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    contents: {
        severity: "",
        title: "",
        message: "",
    }
}

export const snackBarSlice = createSlice({
    name: 'snackBarSlice',
    initialState,
    reducers: {
        setSnackBar(state, actions) {
            state.contents = actions.payload
        },
        openSnackBar(state) {
            state.open = true;
        },
        closeSnackBar(state) {
            state.open = false;
        }
    },
})

// Action creators are generated for each case reducer function
const {reducer, actions} = snackBarSlice;
export const { setSnackBar, openSnackBar, closeSnackBar } = actions;
export default snackBarSlice.reducer;