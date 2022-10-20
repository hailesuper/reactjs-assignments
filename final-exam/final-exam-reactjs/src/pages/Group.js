import {filter} from 'lodash';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
// material
import {
    Button,
    Card,
    Checkbox,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
// components
import {useDispatch, useSelector} from "react-redux";
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import {UserListHead, UserListToolbar, UserMoreMenu} from '../sections/@dashboard/user';
// mock
import groupApi from "../api/GroupApi";
import CreateGroupForm from "../components/modal/create-group-form.component";
import SnackBar from "../components/modal/alert.component";
import ColorButtons from "../components/button/button.component";
import UpdateGroupForm from "../components/modal/update-group-form.component";
import DeleteGroupForm from "../components/modal/delete-group-form.component";
import {openAlertDialog, setAlertDialog} from "../store/alertDialog/alertDialogSlice";
import DeleteGroupsForm from "../components/modal/delete-groups-form.component";


// ----------------------------------------------------------------------

const TABLE_HEAD = [
    {id: 'id', label: 'ID', alignRight: false},
    {id: 'name', label: 'Name', alignRight: false},
    {id: 'totalMember', label: 'Total Member'},
    {id: 'edit', label: '', alignRight: false},
    {id: 'delete', label: '', alignRight: false},

];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function Group() {

    const dispatch = useDispatch();

    const [groups, setGroups] = useState([]);

    const [page, setPage] = useState(0);


    const [order, setOrder] = useState("asc");

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('id');

    const [filterName, setFilterName] = useState('');

    const [groupsTotalElement, setGroupsTotalElement] = useState(0);

    const [showCreateGroupForm, setShowCreateGroupForm] = useState(false);
    const [updateGroupFormData, setUpdateGroupFormData] = useState({});
    const [showUpdateGroupForm, setShowUpdateGroupForm] = useState(false);
    const [deleteGroupFormData, setDeleteGroupFormData] = useState({});
    const [showDeleteGroupForm, setShowDeleteGroupForm] = useState(false);
    const [showDeleteGroupsForm, setShowDeleteGroupsForm] = useState(false);

    async function fetchGroups() {
        // const response = await groupApi.getAllGroups();
        const pagination = {
            page: page + 1,
            size: rowsPerPage,
            sort: `${orderBy},${order}`,
            search: filterName ? filterName.trim() : ""
        }
        const response = await groupApi.getAllGroups(pagination);
        setGroupsTotalElement(response.totalElements);
        setGroups(response.content);
    }

    useEffect(() => {


        fetchGroups();
    }, [
        page, order, rowsPerPage, orderBy, filterName
    ])


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = groups.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name, id) => {

        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const filteredGroups = applySortFilter(groups, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredGroups.length === 0;

    const handleEditGroup = (rowData) => {
        setUpdateGroupFormData(rowData);
        setShowUpdateGroupForm(true);
    }

    const handleDeleteGroup = (rowData) => {
        dispatch(openAlertDialog());
        setDeleteGroupFormData(rowData);
        setShowDeleteGroupForm(true);
    }

    const handleGroupDeleteByIds = () => {
        dispatch(openAlertDialog());
        setShowDeleteGroupsForm(true);

    }

    return (
        <>
            <Page title="Groups">
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Groups
                        </Typography>
                        <Button variant="contained" component={RouterLink} to="#"
                                startIcon={<Iconify icon="eva:plus-fill"/>}
                                onClick={() => setShowCreateGroupForm(true)}
                        >
                            New Group
                        </Button>
                    </Stack>

                    <Card>
                        <UserListToolbar numSelected={selected.length} filterName={filterName}
                                         onFilterName={handleFilterByName} selectedIds={selected}
                                         handleGroupDeleteByIds={handleGroupDeleteByIds}
                        />

                        <Scrollbar>
                            <TableContainer sx={{minWidth: 800}}>
                                <Table>
                                    <UserListHead
                                        order={order}
                                        orderBy={orderBy}
                                        headLabel={TABLE_HEAD}
                                        rowCount={filteredGroups.length}
                                        numSelected={selected.length}
                                        onRequestSort={handleRequestSort}
                                        onSelectAllClick={handleSelectAllClick}
                                    />
                                    <TableBody>
                                        {filteredGroups.map((row) => {

                                            const {id, name, totalMember} = row;
                                            const isItemSelected = selected.indexOf(id) !== -1;

                                            return (
                                                <TableRow
                                                    hover
                                                    key={id}
                                                    tabIndex={-1}
                                                    role="checkbox"
                                                    selected={isItemSelected}
                                                    aria-checked={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={isItemSelected}
                                                                  onChange={(event) => handleClick(event, name, id)}/>
                                                    </TableCell>

                                                    <TableCell align="left">{id}</TableCell>

                                                    <TableCell align="left">{name}</TableCell>

                                                    <TableCell align="left">{totalMember}</TableCell>


                                                    <TableCell align="center">
                                                        <Button variant="contained"
                                                                startIcon={<Iconify icon="ant-design:edit-filled"/>}
                                                                onClick={() => handleEditGroup(row)}
                                                        >
                                                            Edit
                                                        </Button>

                                                    </TableCell>

                                                    <TableCell align="center">
                                                        <Button variant="contained"
                                                                color={"error"}
                                                                startIcon={<Iconify icon="fluent:delete-dismiss-20-filled"/>}
                                                                onClick={() => handleDeleteGroup(row)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </TableCell>


                                                </TableRow>
                                            );
                                        })}

                                    </TableBody>

                                    {isUserNotFound && (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center" colSpan={6} sx={{py: 3}}>
                                                    <SearchNotFound searchQuery={filterName}/>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )}
                                </Table>
                            </TableContainer>
                        </Scrollbar>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={groupsTotalElement}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Card>
                </Container>
            </Page>
            {showCreateGroupForm && <CreateGroupForm showDialog={setShowCreateGroupForm} setOrder={setOrder} functions={[fetchGroups]}/>}
            {showUpdateGroupForm && <UpdateGroupForm showDialog={setShowUpdateGroupForm} data={updateGroupFormData} functions={[fetchGroups]}/>}
            {showDeleteGroupForm && <DeleteGroupForm showDialog={setShowDeleteGroupForm} data={deleteGroupFormData} functions={[fetchGroups, setSelected]}/>}
            {showDeleteGroupsForm && <DeleteGroupsForm showDialog={setShowDeleteGroupsForm} data={selected} functions={[fetchGroups, setSelected]}/>}

        </>
    );
}
