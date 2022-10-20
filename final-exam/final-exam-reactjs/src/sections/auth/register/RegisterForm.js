import * as Yup from 'yup';
import {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Stack, IconButton, InputAdornment} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import {FormProvider, RHFTextField} from '../../../components/hook-form';
import UserApi from "../../../api/UserApi";

// ----------------------------------------------------------------------

export default function RegisterForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username required')
            .min(6, "Must be 6 characters or more ")
            .max(50, "Must be 50 characters or less")
            .test("checkUniqueUsername", "This username is already registered", async username => {
                if (username) {
                    const isUsernameExist = await UserApi.existsByUsername(username);
                    return !isUsernameExist;
                }
                return false;
            })
        ,
        firstName: Yup.string().required('First name required')
            .max(50, "Must be 50 characters or less")
        ,
        lastName: Yup.string().required('Last name required')
            .max(50, "Must be 50 characters or less")
        ,
        email: Yup.string().email('Email must be a valid email address')
            .required('Email is required')
            .min(6, "Must be 6 characters or more ")
            .max(50, "Must be 50 characters or less")
            .test("checkUniqueEmail", "This email is already registered", async email => {
                if (email) {
                    const isEmailExist = await UserApi.existsByEmail(email);
                    return !isEmailExist;
                }
                return false
            })
        ,
        password: Yup.string().required('Password is required')
            .min(6, "Must be 6 characters or more ")
            .max(50, "Must be 50 characters or less")
        ,
    });

    const defaultValues = {
        username: "",
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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

    console.log(methods);

    const onSubmit = async (data) => {
        try {
            await UserApi.createUserWithObject(data);
            methods.reset({
                username: "",
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            });

            navigate('/activate', {replace: true});

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
                    <RHFTextField name="firstName" label="First name"
                    />
                    <RHFTextField name="lastName" label="Last name"
                    />
                </Stack>

                <RHFTextField name="username" label="Username"
                              onBlur={async () => {
                                  await trigger(["username"]);
                              }}
                />


                <RHFTextField name="email" label="Email address"
                              onBlur={async () => {
                                  await trigger(["email"]);
                              }}
                />

                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                    Register
                </LoadingButton>
            </Stack>
        </FormProvider>
    );
}
