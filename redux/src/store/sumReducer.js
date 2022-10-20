import {DECREMENT, INCREMENT} from "./constants";

const INITIAL_STATE = {
    count: 1
}
export const sumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                count: state.count - action.payload
            }
        default:
            // throw new Error(`Invalid ${action.type}`)
            return state;
    }
}