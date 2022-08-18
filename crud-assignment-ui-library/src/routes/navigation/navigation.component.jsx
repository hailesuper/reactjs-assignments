import {Component, Fragment} from "react";
import {MenuItem} from "@mui/material";
import {menuList} from "./menu";
import "./css/styles.css"
import {Outlet, Link} from "react-router-dom";

class Navigation extends Component {
    componentWillUnmount() {
        console.log('unmout....');
    }

    render() {
        console.log('render parent')
        return (
            <Fragment>
                <div className={"navigation-bar"}>
                    {menuList.map((menuItem, index) => (
                            <Link to={menuItem.path} key={index}>
                                <MenuItem>
                                    {menuItem.name}
                                </MenuItem>
                            </Link>
                        )
                    )}
                </div>
                <Outlet/>
            </Fragment>

        );
    }
}

export default Navigation;