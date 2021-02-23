import { Card, CardContent, Container, CssBaseline, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import RegisterForm from '../../components/forms/RegisterForm';
import SiteLayout from '../../layouts/SiteLayout'

const styles = makeStyles(theme => ({
    subTitle: {
        color: "#777",
        fontSize: 1.25 + "rem",
        marginBottom: 20,
        textAlign: 'center'
    },
}))

function Register() {
    const classes = styles();
    return (
        <SiteLayout>
            <CssBaseline />
            <Container maxWidth='xs' component="main" >
                <Typography component="h3" variant="h5" className={classes.subTitle}>
                    Register
                </Typography>
                <Card>
                    <CardContent>
                        <RegisterForm />
                    </CardContent>
                </Card>
            </Container>
        </SiteLayout>
    )
}

export default Register
