import {Component, Fragment, PureComponent} from "react";
import Form from "../../components/form/input-form.component";
import {GroupContext} from "../../context/context";
import Table from "../../components/table/table.component";
import BasicTable from "../../components/table/basic-table.component";

class Group extends PureComponent {
    constructor() {
        super();
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/groups",
            {
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa('hai01:123456'),
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            .then(res => res.json())
            .then(data => data.content)
            // .then(content => {
            //     this.setState({
            //         groups: content
            //     });
            // })
    }

    render() {
        console.log('render..')
        return (
            <Fragment>
                <Table/>
            </Fragment>
        );
    }
}

export default Group;