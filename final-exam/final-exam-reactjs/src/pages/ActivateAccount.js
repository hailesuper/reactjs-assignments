import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// -----------------------------------------------------/-----------------

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function ActivateAccount() {
    return (
        <Page title="Activate Account">
            <Container>
                <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Activate your account now!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        An email has just been sent to your account! Please activate your account.
                    </Typography>

                    <Box
                        component="img"
                        src="https://img.freepik.com/free-vector/stamped-postcard-frame-with-travel-theme_53876-97441.jpg?w=1380&t=st=1662493998~exp=1662494598~hmac=db2f58112414bc05a1424433f55c513de6c2f9cc0b9b84d396d56d33c48feb37"
                        sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                    />

                    <Button to="/login" size="large" variant="contained" component={RouterLink}>
                        Sign in now!
                    </Button>
                </ContentStyle>
            </Container>
        </Page>
    );
}
