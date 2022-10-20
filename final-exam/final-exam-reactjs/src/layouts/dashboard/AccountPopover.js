import {useRef, useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
// @mui
import {alpha} from '@mui/material/styles';
import {Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton} from '@mui/material';
// components
import {useDispatch, useSelector} from "react-redux";
import MenuPopover from '../../components/MenuPopover';
import storage from "../../storage/storage";
import {openSnackBar, setSnackBar} from "../../store/snackbar/snackBarSlice";
// mocks_

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
        linkTo: '/',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
        linkTo: '/profile',
    },
    // {
    //     label: 'Settings',
    //     icon: 'eva:settings-2-fill',
    //     linkTo: '#',
    // },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Store
    const account = useSelector(state => state.logInUser.userInfo);
    const avatarUrl = useSelector(state => state.logInUser.avatarUrl);

    const anchorRef = useRef(null);

    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogOut = () => {
        storage.removeToken();
        storage.removeUserInfo();
        navigate("/login");
        dispatch(setSnackBar({
            severity: "success",
            title: "Log out",
            message: "You have just logged out!",
        }));
        dispatch(openSnackBar());
    }

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    p: 0,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                        },
                    }),
                }}
            >
                <Avatar src={avatarUrl} alt="photoURL"/>
            </IconButton>

            <MenuPopover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                sx={{
                    p: 0,
                    mt: 1.5,
                    ml: 0.75,
                    '& .MuiMenuItem-root': {
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                }}
            >
                <Box sx={{my: 1.5, px: 2.5}}>
                    <Typography variant="subtitle2" noWrap>
                        {`${account.firstName} ${account.lastName}`}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                        {account.email}
                    </Typography>
                </Box>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Stack sx={{p: 1}}>
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <MenuItem onClick={handleLogOut} sx={{m: 1}}>
                    Logout
                </MenuItem>
            </MenuPopover>
        </>
    );
}
