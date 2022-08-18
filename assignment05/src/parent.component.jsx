import {Component} from "react";
import Child from "./child.component";

class Parent extends Component {
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        );
    }
}

export default Parent;