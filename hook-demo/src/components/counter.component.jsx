import {useEffect, useState, memo} from "react";

function Counter({functionProp}) {
    let [currentCount, setCurretnCount] = useState(0);

    console.log("render Counter");

    // useEffect(
    //     () => {
    //         const timeId = setInterval(() => {
    //             currentCount++;
    //             console.log(currentCount);
    //         }, 1000);
    //         return () => clearInterval(timeId)
    //     }, []
    // )

    return (
        <>
            <h1>{currentCount++}</h1>
            <button onClick={functionProp}>Get Status</button>
        </>

    )
}

export default memo(Counter);