import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Group from "./routes/group/group.component";
import SignIn from "./routes/sign-in/sign-in.component";
import {isLogin} from "./utils/auth/auth";
import Forbidden from "./routes/error/forbidden.component";


function App() {
    // let isAdmin = () => {
    //     if (logInUserRole !== null)
    //         return logInUserRole.toLowerCase() === "admin";
    //     else return false
    // }
    return (
        <div className="App">
            <Routes>
                <Route path={"/log-in"} element={<SignIn/>}/>
                <Route path={"/"} element={isLogin() ? <Navigation/> : <Navigate to={'/log-in'}/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path={"groups"} element={<Group/>}></Route>
                </Route>
                <Route path={"/forbidden"} element={<Forbidden/>}/>


            </Routes>
        </div>
    );
}

export default App;
