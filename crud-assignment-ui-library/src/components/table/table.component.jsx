import {Component} from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./css/table.css"
import TableCell from '@mui/material/TableCell';
import * as React from "react";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import {GroupContext} from "../../context/context";
import {Button} from "@mui/material";

class Table extends Component {
    // deleteUser = (id) => {
    //     this.props.deleteUser(id);
    // }
    //
    // editUser = (id) => this.props.editUser(id);


    render() {
        // console.log(this.context);
        return (
            <div className={"table-container"}>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">

                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Group Name</TableCell>
                                <TableCell align="right">Creator</TableCell>
                                <TableCell align="right">Created Date</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>

                            </TableRow>
                        </TableHead>

                        {/*<TableBody>*/}

                            {/*<GroupContext.Consumer>*/}

                                {/*{value => value.map(row => {*/}
                                {/*    console.log(value);*/}
                                {/*    return (*/}
                                {/*        <TableRow*/}
                                {/*            key={row.id}*/}
                                {/*            sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
                                {/*        >*/}
                                {/*            <TableCell component="th" scope="row">*/}
                                {/*                {row.id}*/}
                                {/*            </TableCell>*/}
                                {/*            <TableCell align="right">{row.name}</TableCell>*/}
                                {/*            <TableCell align="right">{row.creator.fullName}</TableCell>*/}
                                {/*            <TableCell align="right">{row.createDate}</TableCell>*/}
                                {/*            <Button align="right">Edit</Button>*/}
                                {/*            <Button align="right">Delete</Button>*/}

                                {/*        </TableRow>*/}
                                {/*    );*/}
                                {/*})}*/}
                            {/*</GroupContext.Consumer>*/}

                        {/*</TableBody>*/}
                    </Table>

                </TableContainer>

            </div>
        );
    }
}
// Table.contextType = GroupContext;

export default Table;