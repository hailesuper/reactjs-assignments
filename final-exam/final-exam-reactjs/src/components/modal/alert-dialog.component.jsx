import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    setConfirmedTrue,
    setConfirmedFalse,
    closeAlertDialog,
    setAlertDialog
} from "../../store/alertDialog/alertDialogSlice";

export default function AlertDialog({extraJSX, handleDeleteGroup, contents}) {
    const alertDialog = useSelector(state => state.alertDialog);
    const dispatch = useDispatch();

    useEffect((() => {
        dispatch(setAlertDialog(
            contents
        ));
    }) ,[]);


    const handleClose = () => {
        dispatch(setConfirmedFalse());
        dispatch(closeAlertDialog());
    };

    const handleConfirm = () => {

        dispatch(setConfirmedTrue());
        handleDeleteGroup();
    }

    return (
        <>
            <Dialog
                open={alertDialog.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {alertDialog.contents.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {alertDialog.contents.content}
                    </DialogContentText>
                    {extraJSX}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
