import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {DataContext} from "./context/DataContext";
import GroupsApi from "./api/groups-api";
import Test from "./Test.component";

class App extends Component {

    // componentDidMount() {
    //     const newGroup = {
    //         "name": "tesr5ee111",
    //         "creatorId": 1,
    //         "createDate": "2002-01-01"
    //     };
    //
    //     async function createGroup() {
    //         await GroupsApi.createGroup("/groups",newGroup)
    //             .then(res => console.log(res)
    //             );
    //     }
    //
    //     createGroup();
    // }

    render() {

        return (
                <div>
                    <Test/> // chạy HighOrder(Test)
                </div>
        );
    }
}

export default App;
