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

export default function UpdateGroupForm({data, showDialog, functions}) {
    const {id, name, totalMember} = data;
    const [open, setOpen] = React.useState(true);

    const dispatch = useDispatch();

    const [fetchGroups] = functions;

    const handleClose = () => {
        setOpen(false);
        showDialog(false);
    };


    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .required('Group Name is required')
            .test("checkUniqueGroupName", "This group name is already registered", async groupName => {
                if (groupName === name) {
                    return true;
                }
                const isGroupNameExist = await GroupApi.existsByGroupName(groupName);
                return !isGroupNameExist;

            }),
        totalMember: Yup.number("Must be a number")
            .integer("Must be integer")
            // .required('Total Member is required')
            .test(
                'isPositive',
                'The number must be >= 0!',
                (value) => value >= 0
            )
    });

    const defaultValues = {
        id,
        name,
        totalMember
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

    const onSubmit = async ({id, name, totalMember}) => {
        try {

            await GroupApi.updateGroupById(id, name, totalMember);
            methods.reset({
                name: "",
                totalMember: 0
            });
            handleClose();
            dispatch(setSnackBar({
                severity: "success",
                title: "Successful!",
                message: "Group has been updated successfully!",
            }));
            dispatch(openSnackBar({}));
            fetchGroups();

        } catch (error) {
            console.log(error);
            dispatch(setSnackBar({
                severity: "error",
                title: "Error!",
                message: "Group has NOT been updated!",
            }));
        }

    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Group</DialogTitle>
                <DialogContent>
                    <FormProvider methods={methods} onSubmit={
                        handleSubmit(onSubmit)}>
                        <Stack spacing={3}>

                            <RHFTextField disabled readOnly name="id" label="Id"/>


                            <RHFTextField name="name" label="Group name"

                            />

                            <RHFTextField readOnly name="totalMember" label="Total Member"/>


                            <LoadingButton fullWidth size="large" type="submit" variant="contained"
                                           loading={isSubmitting}>
                                Update
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
