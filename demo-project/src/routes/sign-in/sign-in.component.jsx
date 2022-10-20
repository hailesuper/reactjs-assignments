import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import logInApi from "../../apis/log-in/log-in-api";
import {Fragment, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {logIn} from "../../store/log-in/log-in.slice";
import {Navigate, useNavigate} from "react-router-dom";
import {setToken} from "../../utils/storage/storage.utils";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [error, setError]  = useState({
        isError:false,
        message:false
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);


        try {
            const username = data.get('email');
            const password = data.get('password');
            const logInUserInfo = await logInApi.getLogInUserInfo(username, password);
            dispatch(logIn(logInUserInfo.data));
            const token = btoa(username + ":" + password);
            setToken(token);
            navigate("/");
        } catch (error) {
            console.log(data);
            event.target.reset();
            alert("Username/ Password is not correct");
            navigate("/forbidden");
            setError({
                isError: true,
                message: "Da co loi"
            })

        }

        // dispatch(logIn(logInUserInfo.data));
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };

    const showError = () => {

    }

    const hideError = () => {
        setError({
            isError:false,
            message:false
        })
    }

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} onChange={hideError} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={error.isError}
                                helperText={error.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </ThemeProvider>
        </Fragment>

    );
}
