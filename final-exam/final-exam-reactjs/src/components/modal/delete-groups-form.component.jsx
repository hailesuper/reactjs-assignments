import * as React from 'react';
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import GroupApi from "../../api/GroupApi";
import {openSnackBar, setSnackBar} from "../../store/snackbar/snackBarSlice";
import AlertDialog from "./alert-dialog.component";
import {setAlertDialog} from "../../store/alertDialog/alertDialogSlice";
import {alertContents} from "./alert.content";

export default function DeleteGroupsForm({data, showDialog, functions}) {

    const ids = data;

    const isConfirmed = useSelector(state => state.alertDialog.isConfirmed);
    const [open, setOpen] = React.useState(true);
    const [fetchGroups, setSelected] = functions;

    const dispatch = useDispatch();

    const contents = alertContents.deleteGroups;

    const handleClose = () => {
        setOpen(false);
        showDialog(false);
    };


    const extraJSX = (
        <TextField
            size={'medium'}
            multiline
            maxRows={Infinity}
            disabled
            id="outlined-disabled"
            label="Groups"
            defaultValue={ids.toString()}
            fullWidth
        />
    )

    const handleDeleteGroups = async () => {

        if (isConfirmed) {

            try {
                await GroupApi.deleteGroupByIds(ids);
                handleClose();
                dispatch(setSnackBar({
                    severity: "success",
                    title: "Successful!",
                    message: "Groups has been deleted successfully!",
                }));
                dispatch(openSnackBar({}));
                fetchGroups();
                setSelected([]);
            } catch (error) {
                console.log(error);
                dispatch(setSnackBar({
                    severity: "error",
                    title: "Error!",
                    message: "Groups has NOT been deleted!",
                }));
            }

        }
    }

    return (
        <>
            <AlertDialog extraJSX={extraJSX} handleDeleteGroup={handleDeleteGroups} contents={contents}/>
        </>
    );
}
