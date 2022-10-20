import {useDispatch, useSelector} from "react-redux";
import countReducer, {addOne, switchNumber} from "./count-slice";

const Count = () => {
    const countDispatch = useDispatch();

    const {count} = useSelector(state => {
            console.log(state);
            return state.countReducer
        }
    );

    const switch10Handler = () => {
        countDispatch(switchNumber(10));
    }

    const addOneHandler = () => {
        countDispatch(addOne());
    }
    return (
        <div>
            <h1>Redux-Toolkit-Demo</h1>
            <h2>Current Count: {count}</h2>
            <button onClick={switch10Handler}>Switch to 10</button>
            <button onClick={addOneHandler}>Add 1</button>
        </div>

    )
}


export default Count;