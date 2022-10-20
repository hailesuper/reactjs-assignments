import {useEffect, useState} from "react";

const Ex2EffectHookNoClean = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <h1>Ex2EffectHookNoClean</h1>
            <p>You clicked {count} times</p>
            <button onClick={() =>
                setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Ex2EffectHookNoClean;