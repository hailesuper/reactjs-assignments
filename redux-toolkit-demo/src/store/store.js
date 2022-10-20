import {configureStore} from "@reduxjs/toolkit";
import countReducer from "../components/count/count-slice";

const store = configureStore({
    reducer: {
        countReducer
    }
});



export default store;