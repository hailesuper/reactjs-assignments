import {DECREMENT, INCREMENT} from "./constants";

export const increase = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decrease = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}
