import { Card, CardContent, Container, CssBaseline, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/forms/LoginForm';
import SiteLayout from '../../layouts/SiteLayout'

const styles = makeStyles(theme => ({
    subTitle: {
        color: "#777",
        fontSize: 1.25 + "rem",
        marginBottom: 20,
        textAlign: 'center'
    },
}))
function Login() {
    const classes = styles();
    let { user, role } = useSelector((state) => state.auth);
    const admin = role === "A" ? true : false;
    const users = role === "U" ? true : false;
    const history = useHistory();

    useEffect(() => {
        if (user && admin) {
            history.push("/admin");
        } else if (user && users) {
            history.push("/");
        } else {
            history.push("/login");
        }
    }, [history, admin, user, users]);
    return (
        <SiteLayout>
            <CssBaseline />
            <Container maxWidth='xs' component="main" >
                <Typography component="h3" variant="h5" className={classes.subTitle}>
                    Login
                </Typography>
                <Card>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </Container>
        </SiteLayout>
    )
}

export default Login
