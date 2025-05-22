import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    marginTop: 'auto',
}));

function Footer() {
    return (
        <Box component="footer" marginTop={5}>
            <FooterBox>
                <Container maxWidth="lg">
                    <Typography variant="body1" align="center">
                        Кориков М.Е.
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        <a href='https://github.com/Mihailkoni'>Github</a>
                    </Typography>
                </Container>
            </FooterBox>
        </Box>
    );
}

export default Footer;