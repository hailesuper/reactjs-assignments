import './App.css';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import Header from "./header";
import Error from "./Error";
import {Component} from "react";
import {UserDataContext} from "./context";
import Parent from "./parent.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userArray: [
                {
                    id: 1,
                    name: "Hai"
                }
            ]
        }
    }

    renderRoutes = (routes) => {
        if (routes.length > 0) {
            return (
                routes.map(({path, element}, index) =>
                    <Route path={path} element={element} key={index}/>
                )
            )
        }
    }

    increaseNumberBy5 = () => {
        const newNumber = this.state.userArray[0].id + 5;
        const newArray = [
            {
                id: newNumber,
                name: "Hai"
            }
        ]
        this.setState({
            userArray: newArray
        })
    };

    render() {
        return (
            <>
                <Header/>
                <div className="App">
                    <Routes>
                        {this.renderRoutes(routes)}
                    </Routes>
                    <UserDataContext.Provider value={
                        {
                            state: this.state,
                            increaseNumberBy5: this.increaseNumberBy5
                        }
                    }>
                        <Parent/>
                    </UserDataContext.Provider>
                </div>
            </>
        );
    }
}

export default App;
