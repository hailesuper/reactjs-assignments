import * as Yup from 'yup';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {IconButton, InputAdornment, Link, Stack} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// components
import {useDispatch} from "react-redux";
import Iconify from '../../../components/Iconify';
import {FormProvider, RHFCheckbox, RHFTextField} from '../../../components/hook-form';
import LoginApi from "../../../api/LoginApi";
import storage from "../../../storage/storage";
import {setIsRememberMe, setToken, setUserInfo} from "../../../store/user/logInUserSlice";
import {openSnackBar, setSnackBar} from "../../../store/snackbar/snackBarSlice";

// ----------------------------------------------------------------------

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Store
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username required')
            .min(6, "Must be 6 characters or more ")
            .max(50, "Must be 50 characters or less")
        ,
        password: Yup.string().required('Password is required')
            .min(6, "Must be 6 characters or more ")
            .max(50, "Must be 50 characters or less")
        ,
    });

    const defaultValues = {
        username: '',
        password: '',
        remember: true,
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        formState: {isSubmitting},
    } = methods;

    const onSubmit = async ({username, password, remember}) => {
        try {
            const logInResult = await LoginApi.login(username, password);

            if (logInResult.token != null) {
                // Save to storage
                dispatch(setIsRememberMe(remember));
                storage.setRememberMe(remember);
                storage.setToken(logInResult.token);
                storage.setUserInfo(
                    logInResult.userName,
                    logInResult.email,
                    logInResult.firstName,
                    logInResult.lastName,
                    logInResult.role,
                    logInResult.status
                );
                // Save to store
                dispatch(setToken(logInResult.token));
                dispatch(setUserInfo({
                    username: logInResult.userName,
                    email: logInResult.email,
                    firstName: logInResult.firstName,
                    lastName: logInResult.lastName,
                    role: logInResult.role,
                    status: logInResult.status,
                }));

                navigate('/dashboard/groups', {replace: true});

            } else {
                dispatch(setSnackBar({
                    severity: "error",
                    title: "Account not activated",
                    message: "Your account needs to be activated to log in.",
                }));
                dispatch(openSnackBar());
            }
            ;


        } catch (e) {
            dispatch(setSnackBar({
                severity: "error",
                title: "Log in Failed",
                message: "Username and Password doesn't match!",
            }));
            dispatch(openSnackBar());
            reset();
        }
    };

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <RHFTextField name="username" label="Username"/>

                    <RHFTextField
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                    <RHFCheckbox name="remember" label="Remember me"/>
                    <Link variant="subtitle2" underline="hover">
                        Forgot password?
                    </Link>
                </Stack>

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                    Login
                </LoadingButton>
            </FormProvider>


        </>

    );
}
