import {Link} from "react-router-dom";
import {Component} from "react";
class Header extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"products"}>Products</Link></li>
                    <li><Link to={"testimonials"}>Testimonials</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
