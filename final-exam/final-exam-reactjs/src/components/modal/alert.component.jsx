import * as React from 'react';
import {useEffect} from 'react';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Snackbar} from "@mui/material";
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import {useDispatch, useSelector} from "react-redux";
import {closeSnackBar} from "../../store/snackbar/snackBarSlice";

const Alert = React.forwardRef((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({contents}) {

    const isSnackBarOpen = useSelector(state => state.snackBar.open);
    const dispatch = useDispatch();


    const {severity, title, message} = contents;

    const vertical = 'top';
    const horizontal = 'right';


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(closeSnackBar());
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <Stack spacing={2} sx={{width: '100%'}}>

            <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={handleClose}
                      key={vertical + horizontal}
            >
                <Alert severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>

        </Stack>
    );


}
