import {Component} from "react";
import HighOrder from "./HighOrder.component";

class Test extends Component {
    render() {
        return (
            <div>
                <h1>h1</h1>
                <table>
                    <thead>
                    <tr>
                        <td>head1</td>
                        <td>head2</td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default HighOrder(Test);
// return HOC = return function HOC