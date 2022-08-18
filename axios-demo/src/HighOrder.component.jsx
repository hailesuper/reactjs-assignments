import {Component, Fragment} from "react";
import Test from "./Test.component";

const HighOrder = (SubComponent) => {
    // return (
    //     () => {
    //         console.log("a");
    //         return (
    //             <Fragment>
    //                 <div style={{color: "red"}}>
    //                     <SubComponent/>
    //                 </div>
    //             </Fragment>
    //         )
    //     }
    // )

    const hoc = () => {
        console.log("a");
        return (
            <Fragment>
                <div style={{color: "red"}}>
                    <SubComponent/>
                </div>
            </Fragment>
        )
    }


    return hoc; // return function => ko chạy funcD
}

export default HighOrder;

