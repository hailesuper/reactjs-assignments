import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {FormProvider, RHFTextField} from "../hook-form";
import GroupApi from "../../api/GroupApi";
import {openSnackBar, setSnackBar} from "../../store/snackbar/snackBarSlice";

export default function CreateGroupForm({showDialog, setOrder, functions}) {
    const [open, setOpen] = React.useState(true);
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertSeverity, setAlertSeverity] = React.useState("success");
    const [alertTitle, setAlertTitle] = React.useState("Alert Title");
    const [alertMessage, setAlertMessage] = React.useState("Alert Title");

    const dispatch = useDispatch();

    const [fetchGroups] = functions;


    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        showDialog(false);
    };


    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .required('Group Name is required')
            .test("checkUniqueGroupName", "This group name is already registered", async groupName => {
                if (groupName) {
                    const isGroupNameExist = await GroupApi.existsByGroupName(groupName);
                    return !isGroupNameExist;
                }
                return false;
            })
    });

    const defaultValues = {
        name: ""
    };

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: {isSubmitting},
        trigger
    } = methods;

    const onSubmit = async ({name}) => {
        try {
            await GroupApi.createGroup(name);
            methods.reset({
                name: ""
            });
            setOrder("desc");
            handleClose();
            dispatch(setSnackBar({
                severity: "success",
                title: "Group created!",
                message: "Group has been created successfully!",
            }));
            dispatch(openSnackBar({}))
            fetchGroups();

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Group</DialogTitle>
                <DialogContent>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>

                            <RHFTextField name="name" label="Group name"
                                          onBlur={async () => {
                                              await trigger(["name"]);
                                          }}
                            />


                            <LoadingButton fullWidth size="large" type="submit" variant="contained"
                                           loading={isSubmitting}>
                                Create
                            </LoadingButton>
                        </Stack>
                    </FormProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}
