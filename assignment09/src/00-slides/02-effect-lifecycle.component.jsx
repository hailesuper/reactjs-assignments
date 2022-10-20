import {useEffect, useState} from "react";

const EffectLifecycle = (props) => {

    useEffect(() => {
        console.log("render!");
        console.log("inside: " + props);
        console.log(props);
        return () => console.log("unmounting...")
    })

    console.log("outside: " + props);
    console.log("outside 2: " + props);
    return (
        <div>{props.number}</div>
    )
}

export default EffectLifecycle;