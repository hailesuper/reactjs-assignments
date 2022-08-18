import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Group from "./routes/group/group.component";

class App extends Component {
    render() {
        console.log('appp run..')
        return (
            <Fragment>
                <Routes>
                    <Route path={"/"} element={<Navigation/>}>
                        <Route path={"groups"} element={<Group/>}/>

                    </Route>
                </Routes>
            </Fragment>
        );
    }
}

export default App;
