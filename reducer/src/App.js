import './App.css';
import {useReducer} from "react";

const INPUT_CHANGE = "inputChange";
const ADD_VALUE = "add";


const initialState =
    {
        eventValue: "",
        inputValueArray: []
    };

const handleTextChange = (eventValue) => (
    {
        type: INPUT_CHANGE,
        eventValue: eventValue
    }
);

const addValueToNewRow = (inputValue) => (
    {
        type: ADD_VALUE,
        inputValue
    }
);

const reducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                eventValue: action.eventValue
            };
        case ADD_VALUE:
            let newArr = [...state.inputValueArray];
            console.log(newArr);
            newArr.push(action.inputValue);
            state.eventValue = "";
            return {
                ...state,
                inputValueArray:newArr
            }
        default:
            console.log("default");
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputValueArray = state.inputValueArray;
    console.log(state);
    return (
        <>
            <h1>{state.eventValue}</h1>
            <input type={"text"} onChange={(e) => dispatch(handleTextChange(e.target.value))} value={state.eventValue}/>
            <button onClick={() => dispatch(addValueToNewRow(state.eventValue))}>Add</button>

            {
                inputValueArray && inputValueArray.map(inputValue => (
                    <p key={inputValue}>{inputValue}</p>
                ))
            }
        </>



    )

}

export default App;
