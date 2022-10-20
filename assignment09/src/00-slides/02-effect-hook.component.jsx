import {useState} from "react";
import EffectLifecycle from "./02-effect-lifecycle.component";

const Ex2EffectHook = () => {
   const [randomNumber, setRandomNumber] = useState(Math.random());
   const [isShow, setShow] = useState(true);

   const reRender = () => setRandomNumber(Math.random());
   const toggle = () => setShow(!isShow);

   console.log("Ex2EffectHook");

    return (
        <div>
            <h1>Ex2EffectHook</h1>
            {isShow && <EffectLifecycle number={randomNumber}/>}

            {/*<EffectLifecycle number={randomNumber}/>*/}
            <button onClick={reRender}>Re-render</button>
            <button onClick={toggle}>Show/Hide Component</button>
        </div>
    )
}

export default Ex2EffectHook;