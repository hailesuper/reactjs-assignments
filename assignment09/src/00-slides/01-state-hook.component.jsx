import {useState} from "react";

const Ex1StateHookSlide = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Ex1StateHookSlide</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Ex1StateHookSlide;