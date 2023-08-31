import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    Link,
    Button,
} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import * as React from "react";
import WalletButton from "./WalletButton";

const pages = ['swap', 'tokens', 'about'];

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette: {
        type: "dark",
    },

});
darkTheme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [darkTheme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};
function Header() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h4"
                            className={classes.title}
                            fontFamily="ubuntu"
                            component={Link} 
                            href="/"
                        >
                            CoinSwap
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold' }}>
                            {pages.map((page) => (
                                <Button
                                    href={page}
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 20 }}
                                    
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <WalletButton />
                    </Toolbar>

                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;