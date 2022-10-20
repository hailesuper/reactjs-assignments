import {Link as RouterLink} from 'react-router-dom';
// @mui
import {styled} from '@mui/material/styles';
import {Card, Link, Container, Typography} from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import {RegisterForm} from '../sections/auth/register';
import AuthSocial from '../sections/auth/AuthSocial';
import storage from "../storage/storage";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({theme}) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({theme}) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
    const smUp = useResponsive('up', 'sm');

    const mdUp = useResponsive('up', 'md');

    const isAuth = storage.isAuth();

    return (
        <Page title="Register">
            <RootStyle>
                <HeaderStyle>
                    <Logo/>
                    {smUp && !isAuth && (
                        <Typography variant="body2" sx={{mt: {md: -2}}}>
                            Already have an account? {''}
                            <Link variant="subtitle2" component={RouterLink} to="/login">
                                Login
                            </Link>
                        </Typography>
                    )}

                    {smUp && isAuth && (
                        <Typography variant="body2" sx={{mt: {md: -2}}}>
                            Back to {''}
                            <Link variant="subtitle2" component={RouterLink} to="/dashboard/groups">
                                Groups Management
                            </Link>
                        </Typography>
                    )}
                </HeaderStyle>

                {mdUp && (
                    <SectionStyle>
                        <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                            Group Management Created By Hai
                        </Typography>
                        <img alt="register"
                             src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1662488941~exp=1662489541~hmac=e7786c948930c3ae43d7e29e4ee5389f10c5362ee8c4e06d8646d05f1c3decbd"/>
                    </SectionStyle>
                )}

                <Container>
                    <ContentStyle>
                        <Typography variant="h4" gutterBottom>
                            Register an user.
                        </Typography>

                        <Typography sx={{color: 'text.secondary', mb: 5}}>Used to create an Employee
                            account</Typography>

                        <RegisterForm/>

                        <Typography variant="body2" align="center" sx={{color: 'text.secondary', mt: 3}}>
                            By registering, I agree to Minimal&nbsp;
                            <Link underline="always" color="text.primary" href="#">
                                Terms of Service
                            </Link>
                            {''}and{''}
                            <Link underline="always" color="text.primary" href="#">
                                Privacy Policy
                            </Link>
                            .
                        </Typography>

                        {!smUp && (
                            <Typography variant="body2" sx={{mt: 3, textAlign: 'center'}}>
                                Already have an account?{' '}
                                <Link variant="subtitle2" to="/login" component={RouterLink}>
                                    Login
                                </Link>
                            </Typography>
                        )}
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
