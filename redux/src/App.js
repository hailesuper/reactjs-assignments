import './App.css';
import {connect} from "react-redux";
import {Component} from "react";
import {decrease, increase} from "./store/actions";

const App = (props) => {
    const {count} = props.countApp;
    console.log(count);
    const {increaseCount, decreaseCount} = props.countAppHandler;
    const clickIncreaseHandler = () => increaseCount(10);
    const clickDecreaseHandler = (value) => decreaseCount(value);
    return (
        <div>
            <h1>Redux-Demo</h1>
            <h2>Count: {count}</h2>
            <button onClick={clickIncreaseHandler}>Increase</button>
            <button onClick={() => clickDecreaseHandler(1)}>Decrease</button>

        </div>
    );
}

const mapStateToProps = (state) => (
    {
        countApp: state.sumReducer
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        countAppHandler: {
            increaseCount: value => dispatch(increase(value)),
            decreaseCount: value => dispatch(decrease(value))
        }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(App);
