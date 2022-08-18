import {Component} from "react";


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddUser = () => {
        console.log(this.state);
        this.props.addUser(this.state);
        this.resetState();
    }

    resetState = () => {
        this.setState(
            {
                name: "",
                age: ""
            }
        )
    }

    render() {
        return (
            <>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id={"name"} name={"name"} value={this.state.name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id={"age"} name={"age"} value={this.state.age} onChange={this.handleInputChange}/>
                </div>
                <div>
                    {/*<button onClick={this.props.addUser}>Add</button>*/}
                    <button type={"button"} onClick={this.handleAddUser} className={"btn btn-success"}>Add</button>

                    <button>Update</button>
                </div>
            </>
        )
    }
}

export default Form;