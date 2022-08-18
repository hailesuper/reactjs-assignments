import {Component} from "react";
import Parent from "./parent.component";
import {UserDataContext} from "./context";

class Child extends Component {
    render() {
        return (
            <div>
                <UserDataContext.Consumer>
                    {value => (
                        <>
                            <h1>{value.state.userArray[0].name}</h1>
                            <h2>ID: {value.state.userArray[0].id}</h2>
                            <button onClick={
                                value.increaseNumberBy5
                            }>Add 5</button>
                        </>
                    )}
                </UserDataContext.Consumer>
            </div>
        );
    }
}

export default Child;