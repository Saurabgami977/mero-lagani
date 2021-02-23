import { Card, CardContent, Container, CssBaseline, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
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
    return (
        <SiteLayout>
            <CssBaseline />
            <Container maxWidth='xs' component="main" >
                <Typography component="h3" variant="h5" className={classes.subTitle}>
                    Login
                </Typography>
                <Card>
                    <CardContent>
                        {/* {message && (
                        <DismissableAlert
                        open={isOpen}
                        type={type}
                        message={message}
                        closeAlert={closeAlert}
                        />
                    )} */}
                        <LoginForm />
                    </CardContent>
                </Card>
            </Container>
        </SiteLayout>
    )
}

export default Login
