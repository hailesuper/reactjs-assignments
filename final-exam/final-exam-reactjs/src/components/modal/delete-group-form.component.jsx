import * as React from 'react';
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import GroupApi from "../../api/GroupApi";
import {openSnackBar, setSnackBar} from "../../store/snackbar/snackBarSlice";
import AlertDialog from "./alert-dialog.component";
import {setAlertDialog} from "../../store/alertDialog/alertDialogSlice";
import {alertContents} from "./alert.content";

export default function DeleteGroupForm({data, showDialog, functions}) {
    const {id, name, totalMember} = data;

    const isConfirmed = useSelector(state => state.alertDialog.isConfirmed);
    const [open, setOpen] = React.useState(true);
    const [fetchGroups, setSelected] = functions;



    const dispatch = useDispatch();

    const contents = alertContents.deleteGroup;


    const handleClose = () => {
        setOpen(false);
        showDialog(false);
    };


    const defaultValues = {
        id,
        name,
        totalMember
    };

    const methods = useForm({
        defaultValues,
    });

    const {
        handleSubmit,
        formState: {isSubmitting},
    } = methods;


    const extraJSX = (
        <TextField
            size={'medium'}
            multiline
            maxRows={Infinity}
            disabled
            id="outlined-disabled"
            label="Groups"
            defaultValue={`ID: ${id} Name: ${name}`}
            fullWidth
        />
    )

    const handleDeleteGroup = async () => {
        if (isConfirmed) {
            try {

                await GroupApi.deleteGroupById(id);
                handleClose();
                dispatch(setSnackBar({
                    severity: "success",
                    title: "Successful!",
                    message: "Group has been deleted successfully!",
                }));
                dispatch(openSnackBar({}));
                fetchGroups();
                setSelected([]);
            } catch (error) {
                console.log(error);
                dispatch(setSnackBar({
                    severity: "error",
                    title: "Error!",
                    message: "Group has NOT been deleted!",
                }));
            }

        }
    }

    return (
        <>
            <AlertDialog extraJSX={extraJSX} handleDeleteGroup={handleDeleteGroup} contents={contents}/>
        </>
    );
}
