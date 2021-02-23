import React from 'react';

import { AppBar, Toolbar, Grid, Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../../store/actions/authAction";


const styles = makeStyles(theme => ({
    toolbar: {
        minHeight: 50,
    }
}))

const SiteHeader = () => {
    const classes = styles();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography>
                                Logo
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item container xs spacing={2} justify='center'>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                        // className={classes.navBtn}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/about"
                        // className={classes.navBtn}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/contact"
                        // className={classes.navBtn}
                        >
                            Contact Us
                        </Button>
                    </Grid>
                    {user ? (
                        <Grid item>
                            <Button
                                component={Link}
                                variant='contained'
                                color='secondary'
                                to="/login"
                                onClick={() => dispatch(logout())}
                            // className={classes.navBtn}
                            >
                                Logout
                        </Button>
                        </Grid>) : (
                            <Grid item>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/login"
                                // className={classes.navBtn}
                                >
                                    Log in
                        </Button>
                                <Button
                                    component={Link}
                                    variant='contained'
                                    color='secondary'
                                    to="/register"
                                // className={classes.navBtn}
                                >
                                    Register
                        </Button>
                            </Grid>
                        )
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default SiteHeader
