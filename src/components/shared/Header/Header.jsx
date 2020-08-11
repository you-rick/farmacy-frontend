import React from 'react';
import {AppBar, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Container maxWidth="lg">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h6" component={NavLink} to="/">Offteck</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
};


export default Header;
