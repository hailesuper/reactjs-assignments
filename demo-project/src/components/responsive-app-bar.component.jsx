import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useDispatch, useSelector} from "react-redux";
import {addAdminMenu, removeAdminMenu} from "../store/menu/menu.slice";
import {Fragment, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import logInApi from "../apis/log-in/log-in-api";
import {logIn, logOut} from "../store/log-in/log-in.slice";
import {clearToken} from "../utils/storage/storage.utils";

const ResponsiveAppBar = () => {
    const pages = useSelector(state => state.menu);
    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        clearToken();
        logOut();
    }

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    useEffect(() => {
        async function getLogInUserInfo() {
            const logInUserInfo = await logInApi.getLogInUserInfoByToken(localStorage.getItem("token"));
            console.log(logInUserInfo);
            dispatch(logIn(logInUserInfo.data));
            if (logInUserInfo.data.role === "ADMIN") {
                dispatch(addAdminMenu("groups"))
            }
        };
        getLogInUserInfo();
    }, [])

    return (
        <Fragment>
            <button onClick={() => {
                dispatch(addAdminMenu("groups"));
            }
            }>Add Admin MENU
            </button>
            <button onClick={() => dispatch(removeAdminMenu(pages, ["Home"]),)}>Remove Admin MENU</button>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page, index) => (
                                    <NavLink to={`${page}`}>
                                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page === "/" ? "Home" : page}</Typography>
                                        </MenuItem>
                                    </NavLink>

                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page, index) => (
                                <NavLink to={`${page}`}>
                                    <Button
                                        key={index}
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page === "/" ? "home" : page}
                                    </Button>
                                </NavLink>))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>

                                {/*{settings.map((setting) => (*/}
                                {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                                {/*        <Typography textAlign="center">{setting}</Typography>*/}
                                {/*    </MenuItem>*/}
                                {/*))}*/}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>

    );
};
export default ResponsiveAppBar;
